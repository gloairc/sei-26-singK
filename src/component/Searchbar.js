import React from "react";
import searchSongBtn from "../images/searchSongBtn.png"

const Search = (props) => {

    const handleSearchSubmit = (event) => {
        console.log("clicked searchbar submit")
        event.preventDefault();
        props.onSearchSubmitToggleYT(props.searchInputValue)
        props.onSearchSubmitToggleLyric(props.searchInputValue)
    }
    return (
        <div id="SingK-SearchBar">

            <form onSubmit={(event) => {
                handleSearchSubmit(event);
            }}>
                <div class="d-flex flex-row">
                    <div class="input-group input-group-sm">
                        <input
                            type='text'
                            placeholder='Search for a song...'
                            id='video-search'
                            value={props.searchInputValue}
                            onChange={(event) => props.onSearchInputValueChangeToggle(event)}
                            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        />

                    </div>

                    <div class="input-group-append">
                        <button class="btn btn-primary" id="HomeSearchBar-Btn">
                            <img src={searchSongBtn} id="searchSongBtn-image-SingK" alt="searchSongBtn-logo" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Search