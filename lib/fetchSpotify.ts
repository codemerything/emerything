const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

async function getAccessToken() {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-store",
  });
  const data = await res.json();
  return data.access_token;
}

export async function fetchRecentTrack() {
  const access_token = await getAccessToken();
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();
  const item = data.items?.[0];
  if (!item) return null;
  const track = item.track;
  return {
    title: track.name,
    artist: track.artists.map((a: any) => a.name).join(", "),
    album: track.album.name,
    albumImage: track.album.images[track.album.images.length - 1]?.url, // smallest image
    url: track.external_urls.spotify,
  };
}
