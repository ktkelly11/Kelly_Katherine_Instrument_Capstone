import { useState, useEffect } from "react";
import NavBar from "../components/navBar/NavBar";
import DonationsIntro from "../components/donationsIntro/DonationsIntro";
import NewDonation from "../components/newDonation/NewDonation";

function Donations() {
  const [donations, setDonations] = useState([]);

  const baseUrl = "https://instrument-capstone-backend.onrender.com";

  useEffect(() => {
    const getDonations = async () => {
      try {
        const response = await fetch(`${baseUrl}/donations`);

        if (response.status !== 200) {
          return;
        }

        const data = await response.json();

        setDonations(data);
      } catch (err) {
        console.log(err);
      }
    };

    getDonations();
  }, []);

  return (
    <>
      <NavBar />
      <DonationsIntro />
      <NewDonation donations={donations} baseUrl={baseUrl} />
    </>
  );
}

export default Donations;
