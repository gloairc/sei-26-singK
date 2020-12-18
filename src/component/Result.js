import React, { useEffect, useState } from "react";
import IndivCardResult from "./IndivCardResult"
import IndivCardLyricResult from "./IndivCardLyricResult"
import mic from "../images/mic.png"
// import axios from "axios";

const Result = (props) => {//send in searchYTResult and searchLyricKey
    const [confirmedLyricKey, setConfirmedLyricKey] = useState("") //default is the first one
    //but at the beginnnig this is going to be "" because props.searchLyricKey array is undefined
    const [confirmedTitle, setConfirmedTitle] = useState("");
    const [confirmedArtist, setConfirmedArtist] = useState("")


    //VIDEO SEARCH RESULT SECTION//
    const noSearch = (// no film selected
        <div>
            <p class="pt-2">No Song Searched</p>
        </div>
    )

    const noYTResult = (
        <div>
            <p class="pt-2">No such video in our database</p>
        </div>
    )

    const haveYTResult = () => {
        if (props.searchYTResult.items === undefined) {
            return (noSearch)
        } else if (props.searchYTResult === []) {
            console.log("empty array")
            return (noYTResult)
        } else {
            return (
                props.searchYTResult.items.map((resultDetails, index) => (
                    <div class="card my-2" key={index} id="YTcard-div">
                        <IndivCardResult
                            id={resultDetails.id.videoId}
                            key={index}
                            title={resultDetails.snippet.title}
                            channelTitle={resultDetails.snippet.channelTitle}
                            publishTime={resultDetails.snippet.publishTime}
                            thumbnailUrl={resultDetails.snippet.thumbnails.medium.url}//replace with video so that on hover show 6sec
                            // lyricKey={props.searchLyricKey}
                            confirmedLyricKey={confirmedLyricKey}
                        />
                    </div>
                ))
            )
        }
    }

    const videoList = (props.searchYTResult.items === undefined) ? noSearch : haveYTResult()

    //CONFIRM LYRICS SECTION//

    const noLyricSearch = (
        <div>
            <p id="updateP">No Song Searched</p>
        </div>
    )

    const undefinedLyricSearch = (
        <div>
            <p id="updateP">Uh-oh, we can't find any matching lyrics in our database</p>
        </div>
    )

    const stillLoadingLyrics = (
        <div>
            <p id="updateP">Hang on... We're searching our database for possible lyrics to match your song </p>
        </div>
    )

    const handleSelectLyricClick = (lKey, lTitle, lArtist) => {//on click, setState
        setConfirmedLyricKey(lKey);
        console.log("confirmed lKey,title,artist", confirmedLyricKey, confirmedTitle, confirmedArtist);
        setConfirmedTitle(lTitle);
        setConfirmedArtist(lArtist)
    }

    const haveLyricResult = () => {
        if (props.isLyricKeyloading === true) {
            return (stillLoadingLyrics)
        }
        else if (props.searchLyricKey === [] || props.searchLyricKey.tracks === {}) {
            return (noLyricSearch)
        } else if (props.searchLyricKey === undefined || props.searchLyricKey.tracks === undefined) {
            return (undefinedLyricSearch)
        } else {
            // setConfirmedLyricKey(props.searchLyricKey.tracks.hits[0].track.key) //set default confirmed lyrics as first object in array
            return (
                props.searchLyricKey.tracks.hits.map((songLyricDetails, index) => (
                    <div class="card my-2" key={index}>
                        <IndivCardLyricResult
                            key={index}
                            id={songLyricDetails.track.key}
                            title={songLyricDetails.track.title}
                            artist={songLyricDetails.track.subtitle}
                            onSelectLyricToggle={handleSelectLyricClick}
                        />
                    </div>
                ))
            )
        }
    }

    // const lyricList = (props.searchLyricKey === undefined) ? noLyricSearch : haveLyricResult()

    const lyricList = (props.isLyricKeyloading === true) ? stillLoadingLyrics : haveLyricResult()

    const haveNotChosenLyric = (
        <p>No Lyrics Chosen Yet</p>
    )

    const noNeedBy = () => {
        if (confirmedArtist === "") {
            return null
        } else {
            return (<span> by {confirmedArtist}</span>)
        }
    }

    const chosenLyric = (
        <p class="pt-1"> <span id="confirmedLyricTitle" class="font-weight-bold">{confirmedTitle}</span> {noNeedBy()}</p>
    )

    const showChosenLyricTitle = (confirmedTitle === "" && confirmedArtist === "") ? haveNotChosenLyric : chosenLyric

    const noKey = "nolyrics"
    const handleNoMatchLyricClick = (e, noKey) => {
        e.stopPropagation();
        console.log("no lyric match")
        console.log("noKey is", noKey)
        setConfirmedLyricKey(noKey);
        setConfirmedTitle("No Matching Lyrics");
        setConfirmedArtist("")
    }

    const noLyricMatch = (
        <div class="card my-2">
            <div id="indivLyricCard-wrap" class="row no-gutters">

                <div class="col-10 py-1" id="lyricCard-confirmedLyric-div">
                    <div class="card-block px-2">
                        <h6 class="card-title">No Matching Lyrics</h6>
                        <p class="card-text">
                            None of the lyrics match
                    </p>
                    </div>
                </div>


                <div class="col-2 d-flex" id="lyricCard-btn-div">
                    <button class="btn btn-danger p-1 font-weight-bold w-100"
                        id="lyricCard-lyricBtn"
                        onClick={(e) => handleNoMatchLyricClick(e, noKey)}
                    >
                        <img src={mic} id="mic-logo" class="align-item-center" />
                    </button>
                </div>

            </div>
        </div>
    )

    //RETURN
    return (
        <div class="container-fluid d-flex flex-row mx-0 px-0" id="resultComponent-overall-cont">

            <div class="container-fluid" id="resultComponent-video-result-cont">

                {videoList}
            </div>

            <div class="container-fluid pt-2" id="resultComponent-lyric-result-cont">
                <span class="font-weight-bold badge badge-dark text-wrap p-1">Chosen Lyrics</span>
                {showChosenLyricTitle}
                {lyricList}
                {noLyricMatch}
            </div >
        </div >
    );
}

export default Result;