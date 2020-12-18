import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: { q: 'a thousand years' }, //to be replaced with searchbar
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
        'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});