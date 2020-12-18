import React, { useState } from "react";
import { SEARCH_RESULT_PAGE } from "../route_constant";
import searchSongBtn from "../images/searchSongBtn.png"
import { Link } from "react-router-dom"

const HomeSearchBar = (props) => {
    const [searchInputValue, setSearchInputValue] = useState(props.searchInput);//props.searchInput
    const encodedSearchInput = encodeURI(searchInputValue)

    const onSearchInputValueChange = (event) => {
        setSearchInputValue(event.target.value)
    }

    const handleHomeSearchSubmit = (e) => {
        console.log("clicked search song button on Homepage to", encodedSearchInput)
        e.stopPropagation();
        if (searchInputValue === "") {
            alert("no input")
        }
    }

    return (
        <div id="HomeSearchBar" class="d-flex mx-auto">
            <div class="input-group input-group-lg">
                <input
                    type="text"
                    placeholder="Search for a song..."
                    id="homesearch-input"
                    value={searchInputValue}
                    class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                    onChange={(event) => onSearchInputValueChange(event)}
                />
            </div>

            <Link to={`${SEARCH_RESULT_PAGE}/${encodedSearchInput}`}
                class="btn btn-primary"
                id="HomeSearchBar-Btn"
                onClick={(e) => handleHomeSearchSubmit(e)}
            >
                <img src={searchSongBtn} id="searchSongBtn-image" alt="searchSongBtn" />
            </Link>
        </div>

    )
}
export default HomeSearchBar


// const handleHomeSearchSubmit = (event) => {
//     console.log("clicked search song button on Homepage")
//     event.preventDefault();
//     props.router.push(SEARCH_RESULT_PAGE + "/" + searchInput)
// }
// return (
//     <form onSubmit={(event) => {
//         handleHomeSearchSubmit(event);
//     }}>

//         <br />
//         <input
//             type="text"
//             placeholder="Search for a song..."
//             id="home-video-search"
//             value={props.searchInputValue}
//             onChange={(event) => onSearchInputValueChange(event)}
//         />
//         <button>Search Song</button>
//     </form>

// )