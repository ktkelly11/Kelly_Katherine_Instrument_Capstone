import "./CommentsList.css";

export default function CommentsList({ comments }) {
  return (
    <>
      <ul className="comment-list">
        {comments.length ? (
          comments.map((c) => {
            return <p>{c.name}</p>;
          })
        ) : (
          <p>No Comments. Feel free to add one of your own!</p>
        )}
      </ul>
    </>
  );
}
