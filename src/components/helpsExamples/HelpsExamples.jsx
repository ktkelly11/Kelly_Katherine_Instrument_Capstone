import "./HelpsExamples.css";
import music_class from "../../images/howItHelps/music_class.webp";
import music_class_2 from "../../images/howItHelps/music_class_2.jpg";
import music_class_3 from "../../images/howItHelps/music_class_3.jpg";
import music_class_4 from "../../images/howItHelps/music_class_4.jpg";
import kindergarten_1 from "../../images/howItHelps/kindergarten_1.png";
import students_4 from "../../images/howItHelps/students_4.png";

export default function HelpExamples() {
  return (
    <>
      <div className="helps-1">
        <img src={kindergarten_1} alt="Music class" />
        <p>
          Children who study music become better students and more creative,
          compassionate people. In addition to learning the value of teamwork,
          listening skills improve, along with critical thinking,
          self-discipline and self- esteem.
        </p>
      </div>
      <div className="helps-2">
        <p>
          Research has proven the link between music and our mood. Listening to
          a favorite song can cause a release of dopamine into the brain that
          helps prevent depression. With depression at record levels in
          children, music can provide a natural way to increase happiness.
        </p>
        <img src={music_class_2} alt="Music class" />
      </div>
      <div className="helps-3">
        <img
          src={music_class}
          alt="Sam talks about what it means to him to be able to create music with the help of Ms. Johnson"
        />
        <p>Explanation of why the instruments are important</p>
      </div>
      <div className="helps-4">
        <p>Explanation of why the instruments are important</p>
        <img src={students_4} alt="Mr. Davis teaching a class" />
      </div>
      <div className="helps-5">
        <img
          src={music_class_3}
          alt="Sam talks about what it means to him to be able to create music with the help of Ms. Johnson"
        />
        <p>Explanation of why the instruments are important</p>
      </div>
      <div className="helps-6">
        <p>Explanation of why the instruments are important</p>
        <img src={music_class_4} alt="Mr. Davis teaching a class" />
      </div>
    </>
  );
}
