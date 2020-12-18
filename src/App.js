import './css/App.css';
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage"
import SearchResultPage from "./pages/SearchResultPage"
import ShowVideoPage from "./pages/showVideoPage"
import { Switch, Route } from "react-router-dom";
import { HOME_PAGE, SEARCH_RESULT_PAGE, VIDEO_PAGE } from "./route_constant";
import TopBanner from "./component/TopBanner"

function App() {

    return (
        <div class="container-fluid px-0" id="overall-app-cont">
            <TopBanner />

            <Switch>
                <Route path={HOME_PAGE} exact> <HomePage /> </Route>

                <Route path={`${SEARCH_RESULT_PAGE}/:encodedSearchInput`} > <SearchResultPage /> </Route>

                <Route path={`${VIDEO_PAGE}/:videoId/:confirmedLyricKey`} > <ShowVideoPage /> </Route>

                <Route> <p class="text-center mt-5" id="nothing-here">Oops, nothing here
                <br />
                    <br />
                Could it be... you forgot to choose your lyrics before selecting your video?
                </p> </Route>
            </Switch>


        </div>
    );
}

export default App;