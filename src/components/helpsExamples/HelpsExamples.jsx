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
    </>
  );
}
