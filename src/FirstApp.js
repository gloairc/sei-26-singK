import './App.css';

// const YTapiKEY = process.env.REACT_APP_YT_API_KEY

function App() { //search a thousand years
  const videoId = "rtOvBOTyX00"
  return (

    <div class="container-fluid my-3" id="overall-cont">
      <h1>SingK</h1>

      <div class="container-fluid d-flex flex-row" id="content-cont">

        <div class="container" id="video-cont">
          <iframe width="720" height="500"
            src={"https://www.youtube.com/embed/" + videoId}>
          </iframe>
        </div>

        <div class="container vh=100 overflow-auto" id="lyrics-cont">
          {ytResult.sections[1].text.map((lyrics, index) => (
            <p id={index} key={index}>{lyrics}</p>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;

//src="https://www.youtube.com/embed/tgbNymZ7vqY">
