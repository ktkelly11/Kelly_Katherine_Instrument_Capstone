import NavBar from "../components/navBar/NavBar";
import HomePageInfo from "../components/homePageInfo/HomePageInfo";
import HomePageIntro from "../components/homePageIntro/HomePageIntro";
import Footer from "../components/footer/Footer";

function Homepage() {
  return (
    <>
      <NavBar />
      <HomePageIntro />
      <HomePageInfo />
      <Footer />
    </>
  );
}

export default Homepage;
