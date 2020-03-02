const clientID = `${process.env.REACT_APP_CLIENT_ID}`;
const redirectURI = "http://localhost:3000/";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
  },

  async search(term) {
    const accessToken = this.getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) return [];
    return await jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  },
  
  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) return;

    const accessToken = await this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    const response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: headers
    });
    const jsonResponse = await response.json();
    userId = await jsonResponse.id;

    const userResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ name: name })
      }
    );
    const userJsonResponse = await userResponse.json();
    const playlistId = await userJsonResponse.id;

    return await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ uris: trackUris })
      }
    );
  }
};
export default Spotify;
