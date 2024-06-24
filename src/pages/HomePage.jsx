import NavBar from "../components/navBar/NavBar";
import HomePageIntro from "../components/homePageIntro/HomePageIntro";
import HomePageInfo from "../components/homePageInfo/HomePageInfo";
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
