import HomeSearchBar from "../component/HomeSearchBar";
import singKLogo from "../images/singK_logo.png"

const LandingPage = (props) => {

    return (
        <div id="homepage-overall-div">
            <h3 id="homepage-blurb" class="text-center my-5"> Sing to a video of your choice with lyrics
            <br /> on the same screen</h3>

            <div id="homepage-wrap-searchbar" class="text-center">
                <HomeSearchBar />
            </div>

            <div id="singK-pic-wrap" class="text-center">
                <img src={singKLogo} alt="singKlogo" id="singK-pic" />
            </div>

        </div >
    )
}

export default LandingPage