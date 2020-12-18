import React, { useEffect, useState } from "react";
import Search from "./Searchbar"
import axios from "axios"; //use Axios, but currently replace with internal JS
import searchHappy from "../practiceResult/ytSearchHappy"
import getHappySongResult from "../practiceResult/shazamgetsongResult"
import Result from "./Result"

const SingK = (props) => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchYTResult, setYTSearchResult] = useState([]);
    const [searchLyricKey, setSearchLyricKey] = useState([]);//array of object
    const [isLyricKeyloading, setLyricKeyLoading] = useState(false)

    const onSearchInputValueChange = (event) => {
        setSearchInputValue(event.target.value)
    }

    //AXIOS BELOW//
    //AXIOS YT VIDEO
    const onSearchSubmitYT = (searchInput) => {
        console.log("searchinput value ", searchInputValue)
        //https://www.googleapis.com/youtube/v3/search?maxResults=5&key=AIzaSyBv73uxAUM-WGexPtso3xS3Agf8fHYhgyw&part=snippet&q=happy

        if (searchInputValue === "" || searchInputValue === undefined) {
            alert("Please key in song name")
        } else {
            axios
                .create({
                    baseURL: "https://www.googleapis.com/youtube/v3",
                    params: {
                        maxResults: 10,
                        key: process.env.REACT_APP_YT_API_KEY,
                        part: "snippet"
                    }
                })
                .get("/search", {
                    params: {
                        q: searchInput
                    }
                })
                .then(response => {
                    console.log(response.data.items);
                    //map into cards
                    setYTSearchResult(response.data);
                })
                .catch((reason) => {
                    console.log("Error");
                })
        }
    }

    //AXIOS SEARCH SONG KEY 
    const onSearchSubmitLyrics = (searchInput) => {
        setLyricKeyLoading(true)

        const options = {
            method: "GET",
            url: "https://shazam.p.rapidapi.com/search",
            params: { term: searchInput, limit: "5" },
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
                "x-rapidapi-host": "shazam.p.rapidapi.com"
            }
        };

        axios
            .request(options)
            .then(response => {
                setSearchLyricKey(response.data); //an array of objects
                console.log("lyricKey response.data", response.data);
                setLyricKeyLoading(false)
            })
            .catch((reason) => {
                console.log("Error");
            })
    };


    return (
        <div class="container-fluid pt-2" id="sub-overall-cont">

            <div class="container-fluid d-flex flex-row pb-2" id="search-cont">
                <Search
                    onSearchInputValueChangeToggle={onSearchInputValueChange}
                    onSearchSubmitToggleYT={onSearchSubmitYT}
                    onSearchSubmitToggleLyric={onSearchSubmitLyrics}
                    searchInputValue={searchInputValue} />
            </div>

            <div class="container-fluid d-flex flex-row px-0" id="result-cont">
                <Result
                    searchYTResult={searchYTResult}
                    searchLyricKey={searchLyricKey}
                    isLyricKeyloading={isLyricKeyloading}
                />

            </div>
        </div>
    )
}


export default SingK;

    // //REFER TO JS WAY, REDUCE AXIOS CALL
    // const onSearchSubmitYT = (searchInput) => {
    //     console.log("button click, onSearchSubmitYT running");
    //     //AXIOS YT HERE and setSearch result for youtube
    //     setYTSearchResult(searchHappy); //imported
    //     //pass down the response.data to Results Component to map out
    //     console.log("searchYTResult", searchYTResult)
    // };
// //JS WAY
    // const onSearchSubmitLyrics = (searchInput) => {
    //     //AXIOS 1 - GET KEY
    //     if (getHappySongResult.tracks.hits[0].track.key === undefined) {
    //         setSearchLyricKey("nolyrics")
    //     } else {
    //         setSearchLyricKey(getHappySongResult);
    //     };
    // }