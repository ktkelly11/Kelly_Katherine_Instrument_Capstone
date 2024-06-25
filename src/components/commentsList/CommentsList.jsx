import "./CommentsList.css";

export default function CommentsList({ comments }) {
  //   console.log(comments);
  return (
    <>
      <ul className="comment-list">
        {comments.length ? (
          comments.map((c) => {
            return (
              <div className="individual-comments">
                <p>{c.name}</p>
                <p>{c.title}</p>
                <p>{c.comment}</p>
              </div>
            );
          })
        ) : (
          <p>No Comments. Feel free to add one of your own!</p>
        )}
      </ul>
    </>
  );
}
