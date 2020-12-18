import React from "react";
import { VIDEO_PAGE } from "../route_constant";
import { Link } from "react-router-dom"
import kTV from "../images/kTV.png"

const IndivCardResult = (props) => {
    const handleSelectVideoClick = (e) => {
        e.stopPropagation();
        console.log("selected a video")
        console.log("video e.target.id", e.target.id)
    }

    //DATE
    const newDate = new Date(props.publishTime)
    const corrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const year = newDate.getFullYear()
    const month = corrMonth[newDate.getMonth()]
    const date = newDate.getDate()
    const formattedTime = date + " " + month + " " + year

    return (

        <div id="indivYTCard-wrap" class="row no-gutters">
            <div class="col-row d-flex" id="indivCard-img-div">
                <img src={props.thumbnailUrl}
                    class="img-fluid
                    " alt={props.title} />
            </div>

            <div class="col">
                <div class="card-block p-2">
                    <h6 class="card-title">{props.title}</h6>
                    <p class="card-text">
                        {props.channelTitle}
                        <br />
                        {formattedTime}
                    </p>
                    {/* click button go to VIDEO_PAGE */}
                    <Link to={`${VIDEO_PAGE}/${props.id}/${props.confirmedLyricKey}`}
                        class="btn btn-warning p-1 font-weight-bold"
                        id="result-page-singKBtn"
                        onClick={(e) => handleSelectVideoClick(e)}
                    >
                        SingK!
                        <img src={kTV} id="kTV-logo" alt="kTV-logo" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default IndivCardResult

    // const [duration, setDuration] = useState("")
    // const [viewCount, setViewCount] = useState("")
    // const YTkey = process.env.REACT_APP_YT_API_KEY

    //below will be an infinite loop 
    // const retrieveContentDetails = async (resultDetails) => {
    //     // axios
    //     // .create({
    //     baseURL: "https://www.googleapis.com/youtube/v3",
    //     //         params: {
    //     key: YTkey,
    //         part: "contentDetails,statistics"
    // }
    //     })
    //     .get("/videos", {
    //     params: {
    //         id: resultDetails.id.videoId
    //     }
    // })
    //     .then(response => {
    //         console.log("get contentDetails and statistics", response.data.items);
    //         setDuration(response.data.items[0].contentDetails.duration);
    //         setViewCount(response.data.items[0].statistics.viewCount)
    //     })
    //     };
