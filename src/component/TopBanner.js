import singKLogo from "../images/singK_logo.png"

const TopBanner = (props) => {
    return (
        <div id="top-banner" class="container-fluid d-flex flex-row align-items-center">

            <img src={singKLogo} alt="singKlogo" id="singK-logo" />

            <div id="singK-name-div">
                <h1 id="singK-name" class="d-inline align-middle">SingK</h1>
            </div>
        </div>
    )
}

export default TopBanner