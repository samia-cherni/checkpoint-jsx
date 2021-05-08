import img from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
        <div className="container"style={{border:'solid 1px black', maxWidth:'100vw'}}>
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <h1 className="title red">Animal pictures and videos</h1>
            <br />
            <img className="rounded img-fluid" src={img} alt="in source"/>
            <br />
            <img className="rounded img-fluid" src="/imageInPublic.jpg" alt="in public"/>
          </div>
          <div className="col"></div>
          </div>
        </div>
              <video width={320} height={240} controls>
                <source src="/myVideo.mp4" type="video/mp4" />
              </video>
      </div>
  );
}

export default App;
