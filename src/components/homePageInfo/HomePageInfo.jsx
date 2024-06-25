import "./HomePageInfo.css";
import students_1 from "../../images/homePage/students_1.png";
import students_2 from "../../images/homePage/students_2.webp";

export default function HomePageInfo() {
  return (
    <>
      <div className="home-page-summary">
        <div className="site-summary">
          <p>
            We believe that music can be transformative, and a musical
            instrument can help a child discover not only their own musical
            abilities but the joy of making music with others. Many children
            love music and want to learn to play it. But many families simply
            can’t afford the cost to rent or buy an instrument.
            <br />
            <br />
            Here’s how you can help. Many families own gently used band and
            orchestra instruments which are frequently gathering dust in a
            closet or attic. We use volunteer labor and cash donations to
            refurbish the instruments and work with teachers to get them to
            students who otherwise would not have one.
          </p>
        </div>
        <div className="student-image">
          <img
            src={students_1}
            alt="Students learning with Secondhand Instruments"
          />
          <img
            src={students_2}
            alt="Students learning with secondhand instruments"
          />
        </div>
      </div>
    </>
  );
}
