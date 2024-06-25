import "./NewComment.css";
import { useRef } from "react";

export default function NewComment({ comments, setComments, baseUrl }) {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const commentRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newComment = {
        name: nameRef.current.value,
        title: titleRef.current.value,
        comment: commentRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
      };

      const response = await fetch(`${baseUrl}/comments`, {
        method: "Post",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (response.status !== 201) {
        return;
      }

      const createdComment = await response.json();

      setComments([...comments, createdComment]);

      nameRef.current.value = "";
      titleRef.current.value = "";
      commentRef.current.value = "";
      cityRef.current.value = "";
      stateRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-comment">
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
