import { Buffer } from "buffer";
import { cache } from "react";

const CLIENT_ID = "a6f1b9efe965475dbe49332dcce320f5";
const CLIENT_SECRET = "c9005db318644e2babb6e85073e3fbe5";
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

type SpotifyTrack = {
  title: string;
  artist: string;
  albumImage: string;
  url: string;
  isCurrentlyPlaying?: boolean;
};

// Cache the access token and its expiration
let accessToken: string | null = null;
let tokenExpirationTime: number | null = null;

const getAccessToken = cache(async () => {
  if (!REFRESH_TOKEN) {
    throw new Error(
      "SPOTIFY_REFRESH_TOKEN is not set. Please add it to your environment variables."
    );
  }

  // Check if we have a valid cached token
  if (accessToken && tokenExpirationTime && Date.now() < tokenExpirationTime) {
    return accessToken;
  }

  try {
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64"
    );
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to refresh access token");
    }

    const data = await response.json();

    // Cache the new token and set expiration
    accessToken = data.access_token;
    // Set expiration 5 minutes before actual expiry to be safe
    tokenExpirationTime = Date.now() + (data.expires_in - 300) * 1000;

    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw new Error("Failed to refresh access token");
  }
});

async function getCurrentlyPlaying(): Promise<SpotifyTrack | null> {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: "no-store",
      }
    );

    // No content means nothing is playing
    if (response.status === 204) {
      return null;
    }

    if (!response.ok) {
      throw new Error("Failed to fetch currently playing track");
    }

    const data = await response.json();
    if (!data.item) return null;

    return {
      title: data.item.name,
      artist: data.item.artists.map((a: any) => a.name).join(", "),
      albumImage:
        data.item.album.images[data.item.album.images.length - 1]?.url,
      url: data.item.external_urls.spotify,
      isCurrentlyPlaying: true,
    };
  } catch (error) {
    console.error("Error fetching currently playing:", error);
    return null;
  }
}

async function getRecentlyPlayed(): Promise<SpotifyTrack | null> {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recently played tracks");
    }

    const data = await response.json();
    const track = data.items?.[0]?.track;
    if (!track) return null;

    return {
      title: track.name,
      artist: track.artists.map((a: any) => a.name).join(", "),
      albumImage: track.album.images[track.album.images.length - 1]?.url,
      url: track.external_urls.spotify,
      isCurrentlyPlaying: false,
    };
  } catch (error) {
    console.error("Error fetching recently played:", error);
    return null;
  }
}

// Cache the getSpotifyTrack function for 30 seconds
export const getSpotifyTrack = cache(async (): Promise<SpotifyTrack | null> => {
  try {
    // First try to get currently playing
    const currentTrack = await getCurrentlyPlaying();
    if (currentTrack) return currentTrack;

    // If nothing is playing, get recently played
    return getRecentlyPlayed();
  } catch (error) {
    console.error("Error in getSpotifyTrack:", error);
    return null;
  }
});
