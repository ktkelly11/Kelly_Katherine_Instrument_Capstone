import { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import CommentsIntro from "../components/commentsIntro/CommentsIntro";
import NewComment from "../components/newCooment.jsx/NewComment";

function Comments() {
  const [comments, setComments] = useState([]);

  const baseUrl = "https://instrument-capstone-backend.onrender.com";

  return (
    <>
      <NavBar />
      <CommentsIntro />
      <NewComment
        comments={comments}
        setComments={setComments}
        baseUrl={baseUrl}
      />
    </>
  );
}

export default Comments;
