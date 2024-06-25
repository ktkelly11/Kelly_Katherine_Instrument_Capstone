import { useState, useEffect } from "react";
import NavBar from "../components/navBar/NavBar";
import CommentsIntro from "../components/commentsIntro/CommentsIntro";
import NewComment from "../components/newCooment.jsx/NewComment";
import CommentsList from "../components/commentsList/CommentsList";

function Comments() {
  const [comments, setComments] = useState([]);

  const baseUrl = "https://instrument-capstone-backend.onrender.com";

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
      <CommentsList comments={comments} />
    </>
  );
}

export default Comments;
