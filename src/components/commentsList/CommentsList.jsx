import "./CommentsList.css";

export default function CommentsList({ comments, baseUrl, setComments }) {
  //   console.log(comments);

  const handleDelete = async (comments) => {
    try {
      const response = await fetch(`${baseUrl}/comments/${comments._id}`);

      if (response.status !== 200) {
        return;
      }

      const data = await response.json();

      const filtered = comments.filter((c) => {
        c._id !== data._id;
      });

      setComments(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ul className="comment-list">
        {comments.length ? (
          comments.map((c) => {
            return (
              <div className="individual-comments" key={comments._id}>
                <p>{c.name}</p>
                <p>{c.title}</p>
                <p>{c.comment}</p>
                <p>{c.city}</p>
                <p>{c.state}</p>
                <button>Edit</button>
                <button
                  onClick={() => {
                    handleDelete(comments._id);
                  }}
                >
                  Delete
                </button>
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
