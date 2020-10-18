import axios from 'axios';

const getPlaylistTracks = (urlTrack, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const response = axios.get(`${urlTrack}`, { headers: headers });
    return response;
};

export default getPlaylistTracks;