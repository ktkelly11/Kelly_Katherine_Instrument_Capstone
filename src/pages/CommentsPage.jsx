import { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import CommentsIntro from "../components/commentsIntro/CommentsIntro";
import NewComment from "../components/newCooment.jsx/NewComment";

function Comments() {
  const [comments, setComments] = useState([]);

  return (
    <>
      <NavBar />
      <CommentsIntro />
      <NewComment comments={comments} setComments={setComments} />
    </>
  );
}

export default Comments;
