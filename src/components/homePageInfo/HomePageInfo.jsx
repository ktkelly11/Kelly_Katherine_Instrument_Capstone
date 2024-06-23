import "./HomePageInfo.css";
import music_class from "../../images/homePage/music_class.webp";

export default function HomePageInfo() {
  return (
    <>
      <div className="home-page-intro">
        <div className="site-summary">
          <p>
            Thank you for visiting out site. Here at Secondhand Instruments we
            are providing every child access to the life-changing experience of
            making music. We appreciate your interest in donating instruments
            that will go to a child in a public school who is excited to play
            and learn.
          </p>
        </div>
        <div className="student-image">
          <img
            src={music_class}
            alt="Students learning with Secondhand Instruments"
          />
        </div>
      </div>
    </>
  );
}
