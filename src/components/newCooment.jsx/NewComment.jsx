import "./NewComment.css";
import { useRef } from "react";

export default function NewComment() {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <>
      <form className="new-comment">
        Name: <input type="text" ref={nameRef} />*
        <br />
        Title: <input type="text" ref={titleRef} />*
        <br />
        Comment: <input type="text" />*
        <br />
        City: <input type="text" />
        <br />
        State: <input type="text" />
      </form>
    </>
  );
}
