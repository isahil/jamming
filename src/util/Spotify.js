const clientID = 'c416a4cd61774cebbfac3b524975d148'
const redirectURI = 'http://localhost:3000/'

const Spotify = {
    getAccessToken = async () => {
        let token, expiresIn
        let url = await window.location.href(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}`) 
        if(token) return token
        else if (url.match('/access_token=([^&]*)/')) {        
            token = await url.match('/access_token=([^&]*)/')
            expiresIn = await url.match('/expires_in=([^&]*)/')
            await window.setTimeout(() => accessToken = `${token}`, expiresIn * 1000);
            await window.history.pushState('Access Token', null, '/');
        } else await window.location.href(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`)
    }
}
export default Spotify
