import "./CommentsList.css";

// Adding comments to page
export default function CommentsList({ comments, baseUrl, setComments }) {
  //   console.log(comments);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/comments/${id}`, {
        method: "DELETE",
      });

      if (response.status !== 200) {
        return;
      }

      const data = await response.json();

      const filtered = comments.filter((c) => {
        return c._id !== data._id;
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
                <p className="comment-name">{c.name}</p>
                <p className="comment-title">{c.title}</p>
                <p className="comment-comment">{c.comment}</p>
                <p className="comment-city">{c.city}</p>
                <p className="comment-state">{c.state}</p>
                <button>Edit</button>
                <button
                  onClick={() => {
                    handleDelete(c._id);
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
