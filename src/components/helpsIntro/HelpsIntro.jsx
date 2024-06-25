import "./HelpsIntro.css";

export default function HelpsIntro() {
  return (
    <>
      <div className="title">
        <h1>How your donations make a difference</h1>
      </div>
      <div className="intro">
        <p>Watch a similar program in Los Angeles:</p>
      </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xttrkgKXtZ4?si=TeREEaqy8IU19cxv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="vid-explanation">
        <p>
          This is an Oscar winning video about how providing musical instruments
          to underserved students opens up doors for them. As one viewer put it
          "they aren't repairing instruments - they are repairing kids,
          repairing families, repairing communities. What a beautiful film!"
        </p>
      </div>
    </>
  );
}
