import { useState, useEffect } from "react";
import NavBar from "../components/navBar/NavBar";
// Explains what the comments are:
import CommentsIntro from "../components/commentsIntro/CommentsIntro";
// The POST request to create a new comment:
import NewComment from "../components/newComment.jsx/NewComment";
// Individual comments appearing on the page:
import CommentsList from "../components/commentsList/CommentsList";

function Comments() {
  const [comments, setComments] = useState([]);

  const baseUrl = "https://instrument-capstone-backend.onrender.com";

  // Keeps the comments on the page after a refresh
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(`${baseUrl}/comments`);

        if (response.status !== 200) {
          return;
        }

        const data = await response.json();

        setComments(data);
      } catch (err) {
        console.log(err);
      }
    };

    getComments();
  }, []);

  return (
    <>
      <NavBar />
      <CommentsIntro />
      <NewComment
        comments={comments}
        setComments={setComments}
        baseUrl={baseUrl}
      />

      {/* Props drilling so CommentsList has Base URL */}
      <CommentsList
        comments={comments}
        baseUrl={baseUrl}
        setComments={setComments}
      />
    </>
  );
}

export default Comments;
