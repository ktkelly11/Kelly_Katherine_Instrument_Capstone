import "./NewComment.css";
import { useRef } from "react";

export default function NewComment() {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const commentRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);

  return (
    <>
      <form className="new-comment">
        Name: <input type="text" ref={nameRef} />*
        <br />
        Title: <input type="text" ref={titleRef} />*
        <br />
        Comment: <input type="text" ref={commentRef} />*
        <br />
        City: <input type="text" ref={cityRef} />
        <br />
        State: <input type="text" ref={stateRef} />
        <input type="submit" value="Create Comment" />
      </form>
    </>
  );
}
