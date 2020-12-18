import React, { useEffect, useState } from "react";
import mic from "../images/mic.png"

const IndivCardLyricResult = (props) => {

    const lKey = props.id;
    const lTitle = props.title;
    const lArtist = props.artist

    const handleSelectLyricClick = (e, lKey, lTitle, lArtist) => {
        e.stopPropagation();
        console.log("selected a lyrics")
        console.log("lyrics e.target.id", e.target.id)
        console.log("lKey is", lKey)
        //need to feed the toggle upwards
        props.onSelectLyricToggle(lKey, lTitle, lArtist)
    }

    return (
        <div id="indivLyricCard-wrap" class="row no-gutters">

            <div class="col-10 py-1" id="lyricCard-confirmedLyric-div">
                <div class="card-block px-2">
                    <h6 class="card-title">{lTitle}</h6>
                    <p class="card-text">
                        by {lArtist}
                    </p>
                </div>
            </div>


            <div class="col-2 d-flex" id="lyricCard-btn-div">
                {/* click button toggle to result to confirm videokey */}
                <button class="btn btn-info p-1 font-weight-bold w-100"
                    id="lyricCard-lyricBtn"
                    onClick={(e) => handleSelectLyricClick(e, lKey, lTitle, lArtist)}
                >
                    <img src={mic} id="mic-logo" class="align-item-center" />
                </button>
            </div>

        </div>

    )
}

export default IndivCardLyricResult