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
          <h1>Play</h1>
          <h1>It</h1>
          <h1>Forward</h1>
        </div>
      </div>
    </>
  );
}
