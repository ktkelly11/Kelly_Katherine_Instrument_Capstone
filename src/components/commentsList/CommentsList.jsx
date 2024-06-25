import "./CommentsList.css";
import Comment from "../comment/Comment";

export default function CommentsList({ comments }) {
  //   console.log(comments);
  return (
    <>
      <ul className="comment-list">
        {comments.length ? (
          comments.map((c) => {
            return <Comment key={c._id} comment={c} />;
          })
        ) : (
          <p>No Comments. Feel free to add one of your own!</p>
        )}
      </ul>
    </>
  );
}
