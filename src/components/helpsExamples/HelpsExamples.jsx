import "./HelpsExamples.css";
import music_class from "../../images/howItHelps/music_class.webp";
import music_class_2 from "../../images/howItHelps/music_class_2.jpg";
import music_class_3 from "../../images/howItHelps/music_class_3.jpg";
import music_class_4 from "../../images/howItHelps/music_class_4.jpg";

export default function HelpExamples() {
  return (
    <>
      <div className="teacher-1">
        <img src={music_class_2} alt="Mrs. Singh teaching a class" />
        <p>Explanation of why the instruments are important</p>
      </div>
      <div className="teacher-2">
        <p>Explanation of why the instruments are important</p>
        <img src={music_class} alt="Mr. Davis teaching a class" />
      </div>
      <div className="teacher-3">
        <img
          src={music_class_3}
          alt="Sam talks about what it means to him to be able to create music with the help of Ms. Johnson"
        />
        <p>Explanation of why the instruments are important</p>
      </div>
      <div className="teacher-4">
        <p>Explanation of why the instruments are important</p>
        <img src={music_class_4} alt="Mr. Davis teaching a class" />
      </div>
    </>
  );
}
