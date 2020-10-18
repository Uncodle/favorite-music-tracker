import axios from 'axios';

const getUserPlaylists = (accountId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const params = {
        limit: 50
    };
    const response = axios.get(`https://api.spotify.com/v1/users/${accountId}/playlists`, { headers: headers, params: params });
    return response;
}

export default getUserPlaylists;
