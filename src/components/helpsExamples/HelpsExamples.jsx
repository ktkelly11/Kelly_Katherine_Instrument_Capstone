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
        <img src={music_class} alt="Music class" />
        <p>
          Music has been shown to improve focus and attention and boost mental
          performance when studying or when working on a task.
        </p>
      </div>
      <div className="helps-4">
        <p>
          Music can transport us to the past and can allow us to recall fond
          memories. Listening creates connections in our brains to emotions we
          experienced listening to that music in the past. Music has a profound
          influence on the memories of those with dementia and Alzheimer’s.
        </p>
        <img src={students_4} alt="Music class" />
      </div>
      <div className="helps-5">
        <img src={music_class_3} alt="Music class" />
        <p>
          Listening to peaceful music can help with relaxation by slowing your
          breathing and heart rate as well reducing blood pressure and reducing
          stress hormones.
        </p>
      </div>
      <div className="helps-6">
        <p>
          Music brings people together from all walks of life. It doesn’t matter
          what language you speak or where you are from, music is a language
          that all of us understand. It brings people together at concerts,
          celebrations and places of worship.
        </p>
        <img src={music_class_4} alt="Music class" />
      </div>
    </>
  );
}
