import "./HomePageInfo.css";
import students_1 from "../../images/homePage/students_1.png";
import students_2 from "../../images/homePage/students_2.webp";

export default function HomePageInfo() {
  return (
    <>
      <div className="home-page-summary">
        <div className="site-summary">
          <p>
            Thank you for visiting our site. Here at Secondhand Instruments, we
            strive to provide every child access to the life-changing experience
            of making music. We appreciate your interest in donating instruments
            that will go to a child in a public school who is excited to play
            and learn.
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
