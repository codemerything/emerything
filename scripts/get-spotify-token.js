import http from "http";
import { parse } from "url";
import open from "open";
import { Buffer } from "buffer";

const CLIENT_ID = "a6f1b9efe965475dbe49332dcce320f5";
const CLIENT_SECRET = "c9005db318644e2babb6e85073e3fbe5";
const REDIRECT_URI = "http://127.0.0.1:8888/callback";
const SCOPES = ["user-read-recently-played", "user-read-currently-playing"];

// Create the authorization URL
const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  response_type: "code",
  client_id: CLIENT_ID,
  scope: SCOPES.join(" "),
  redirect_uri: REDIRECT_URI,
}).toString()}`;

// Create a server to handle the callback
const server = http.createServer(async (req, res) => {
  const { code } = parse(req.url || "", true).query;

  if (code) {
    try {
      // Exchange the code for tokens
      const tokenResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            code: code.toString(),
            redirect_uri: REDIRECT_URI,
          }),
        }
      );

      const data = await tokenResponse.json();

      console.log("\nAdd these to your .env.local file:\n");
      console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        "<h1>Success!</h1><p>You can close this window and check your terminal.</p>"
      );
    } catch (error) {
      console.error("Error:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error getting refresh token");
    }

    server.close();
  }
});

server.listen(8888, "127.0.0.1", () => {
  console.log("\nOpening browser for Spotify authorization...");
  console.log("Server listening on http://127.0.0.1:8888");
  open(authUrl);
});
