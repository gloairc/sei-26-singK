import axios from "axios"
const YTKEY = process.env.REACT_APP_RAPIDAPI_API_KEY

const options = {
    method: "GET",
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        q: "surfing",
        key=YTKEY
    }
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });