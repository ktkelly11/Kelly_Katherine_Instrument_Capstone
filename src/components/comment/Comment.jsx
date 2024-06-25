import "./Comment.css";

export default function Comment({ comments }) {
  console.log(comments);

  return (
    <>
      <div
        className="individual-comments"
        //   key={comments._id}
      >
        {/* <p>{comments.title}</p> */}
      </div>
    </>
  );
}
