import "./HomePageIntro.css";
import music_intro from "../../images/homePage/music_intro.png";

export default function HomePageIntro() {
  return (
    <>
      <div className="home-page-intro">
        <div className="img">
          <img src={music_intro} alt="" />
        </div>
        <div className="title">
          <h1>Secondhand</h1>
          <h1>Instruments</h1>
        </div>
      </div>
    </>
  );
}
