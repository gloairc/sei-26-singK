//GET LYRICS
//from GET/Song/DETAILS
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/get-details',
    params: { key: '74333079', locale: 'en-US' }, //key is the song id
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_SHAZAM_API_KEY,
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});