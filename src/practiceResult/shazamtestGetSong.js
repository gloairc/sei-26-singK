import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: { term: 'a thousand years', locale: 'en-US', offset: '0', limit: '5' },
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