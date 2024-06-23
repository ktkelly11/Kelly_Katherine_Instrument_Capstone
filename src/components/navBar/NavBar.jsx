import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <button className="home">Secondhand Instruments</button>
        <button className="how-it-helps">How it Helps</button>
        <button className="comments">Comments</button>
        <button className="donations">Donations</button>
      </nav>
    </>
  );
}
