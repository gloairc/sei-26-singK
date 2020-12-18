import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import HomeSearchBar from "../component/HomeSearchBar";
import Result from "../component/Result"

import searchHappy from "../practiceResult/ytSearchHappy"
import getHappySongResult from "../practiceResult/shazamgetsongResult"
// import sugarLyricKey from "../practiceResult/sugargetSongKey"

const SearchResultPage = (props) => {
    let { encodedSearchInput } = useParams();
    const searchInput = decodeURI(encodedSearchInput);

    const [searchYTResult, setYTSearchResult] = useState([]);
    const [searchLyricKey, setSearchLyricKey] = useState([]);//array of object
    const [isLyricKeyloading, setLyricKeyLoading] = useState(true)

    //AXIOS SEARCH SONG KEY EMBED IN USE EFFECT BELOW
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
                console.log("searchResultPage lyricKey singKsearchResult response.data", response.data);
                setLyricKeyLoading(false)
            })
            .catch((reason) => {
                console.log("Error");
            })
    }

    useEffect(() => {//AXIOS BOTH YT AND SONG KEY
        //AXIOS YT VIDEO
        if (searchInput === "" || searchInput === undefined) {//is this redundant?
            return <p>Missing Search Lyrics Key</p>
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
                    console.log("searchResultPage YT response.data", response.data.items);
                    //map into cards
                    setYTSearchResult(response.data);

                })
                .catch((reason) => {
                    console.log("Error");
                })
        };
        onSearchSubmitLyrics(searchInput)
    }, [searchInput]
    )

    const showLyricKey = () => {

    }
    return (
        <div class="container-fluid pt-1 pb-3" id="searchresultpage-sub-overall-cont">

            <div id="resultpage-wrap-homeSeachBarComponent" class="py-2">
                <HomeSearchBar searchInput={searchInput} />
            </div>

            <div id="resultpage-wrap-resultComponent" class="py-2">
                <Result
                    searchYTResult={searchYTResult}
                    searchLyricKey={searchLyricKey}
                    isLyricKeyloading={isLyricKeyloading}
                />
            </div>

        </div>
    )
}

export default withRouter(SearchResultPage)

// //ALTERNATE TO AXIOS
// const [searchYTResult, setYTSearchResult] = useState(searchHappy);
// const [searchLyricKey, setSearchLyricKey] = useState(getHappySongResult);//array of object
