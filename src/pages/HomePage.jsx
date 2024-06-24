import NavBar from "../components/navBar/NavBar";
import HomePageInfo from "../components/homePageInfo/HomePageInfo";
import HomePageIntro from "../components/homePageIntro/HomePageIntro";

function Homepage() {
  return (
    <>
      <NavBar />
      <HomePageIntro />
      <HomePageInfo />
    </>
  );
}

export default Homepage;
