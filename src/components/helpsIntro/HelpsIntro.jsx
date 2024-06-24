export default function HelpsIntro() {
  return (
    <>
      <div className="title">
        <h1>We'd like to show you how your donations make a difference:</h1>
      </div>
      <div>
        <p>
          Here are a number of stories and accounts from teachers, parents, and
          students about what it means to them theat they have instruments to
          play. Your donation makes a real impact and here is how.
        </p>
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
    </>
  );
}
