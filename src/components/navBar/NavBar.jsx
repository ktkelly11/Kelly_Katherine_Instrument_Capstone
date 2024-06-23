import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link to={"/home"}>
          <div className="home">Secondhand Instruments</div>
        </Link>
        <Link to={"/helps"}>
          <div className="how-it-helps">How it Helps</div>
        </Link>
        <Link to={"/comments"}>
          <div className="comments">Comments</div>
        </Link>
        <Link to={"/donations"}>
          <div className="donations">Donations</div>
        </Link>
      </nav>
    </>
  );
}
