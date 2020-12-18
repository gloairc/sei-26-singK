import React, { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import axios from "axios"
// import ytResult from "../practiceResult/shazamlyricsresult"
import SingK from "../component/SingK"
import mic from "../images/mic.png"

const ShowVideoPage = (props) => {
    const [lyric, setLyric] = useState([])
    const [isloading, setLoading] = useState(true)
    let { videoId, confirmedLyricKey } = useParams()

    //AXIOS WAY TO GET LYRICS


    useEffect(() => {
        //AXIOS 3 - GET LYRICS
        setLoading(true)
        const getLyricOptions = {
            method: "GET",
            url: "https://shazam.p.rapidapi.com/songs/get-details",
            params: { key: confirmedLyricKey },
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
                "x-rapidapi-host": "shazam.p.rapidapi.com"
            }
        }
        axios
            .request(getLyricOptions)
            .then(response => {
                console.log("lyrics", response.data);
                if (confirmedLyricKey !== "nolyrics") {
                    setLyric(response.data.sections[1].text)
                } else {
                    setLyric([])
                }; //returns an array of lyrics
                setLoading(false)
            })
    }, [confirmedLyricKey]
    )

    const noLyric = (
        <div>
            <p class="text-center pt-3">Sorry, we don't have lyrics to this song in our database :/</p>
        </div>
    )

    const haveLyric = () => {
        if (confirmedLyricKey === undefined || lyric === undefined || confirmedLyricKey === "nolyrics") {
            return (noLyric)
        } else {
            return (
                lyric.map((lyrics, index) => (
                    <p
                        class="m-0 pl-3 pr-1"
                        id="lyric-line" key={index}>
                        {lyrics}
                    </p>
                ))
            )
        }
    }

    const showLyric2 = () => {
        if (confirmedLyricKey === undefined || lyric === undefined || lyric === [] || confirmedLyricKey === "nolyrics") {
            return noLyric
        }
        if (isloading === true) {
            return <p class="text-center pt-3" >Hold on tight, we're fetching your lyrics... </p>
        }
        else {
            return haveLyric()
        }
    }

    return (
        <div>
            <div class="container-fluid d-flex flex-row pt-2" id="video-lyric-cont">

                <div class="container-fluid col-8 p-0" id="video-cont">
                    <iframe width="100%"
                        height="100%"
                        title="iframe-YT"
                        src={"https://www.youtube.com/embed/" + videoId}>
                    </iframe>
                </div>

                <div class="container col-4 px-0" id="lyrics-cont">

                    <div id="lyric-bar" class="pl-1 d-flex align-items-center">
                        <img src={mic} id="mic-logo" alt="mic-logo" />
                        <h5 class="m-0 pl-1 py-1">Lyrics</h5>
                    </div>

                    <div id="lyric-wrap">
                        {showLyric2()}
                    </div>
                </div>

            </div>

            <div id="video-page-singK-cont">
                {/* set to 33 vh */}
                <SingK />
            </div>
        </div >
    )
}

export default withRouter(ShowVideoPage)

 //JS WAY WITHOUT AXIOS
    // useEffect(() => {
    //     setLyric(ytResult.sections[1].text)
    // }, [confirmedLyricKey])