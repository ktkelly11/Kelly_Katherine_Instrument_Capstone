import "./NewDonation.css";
import { useRef } from "react";

// For creating a new donation
export default function NewDonation({ donations, setDonations, baseUrl }) {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const instrumentRef = useRef(null);
  const instrumentNumRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = {
        fullName: fullNameRef.current.value,
        email: emailRef.current.value,
        phoneNum: phoneNumRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        instrument: instrumentRef.current.value,
        instrumentNum: instrumentNumRef.current.value,
      };

      const response = await fetch(`${baseUrl}/donations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status !== 200) {
        return;
      }

      const createdDonation = await response.json();

      setDonations([...donations, createdDonation]);

      fullNameRef.current.value = "";
      emailRef.current.value = "";
      phoneNumRef.current.value = "";
      cityRef.current.value = "";
      stateRef.current.value = "";
      instrumentRef.current.value = "";
      instrumentNumRef.current.value = "";

      return (
        <>
          <p>Thank you for your donation! We will be in touch by email.</p>
        </>
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-donation">
        Full Name: <input type="text" ref={fullNameRef} />*
        <br />
        Email: <input type="text" ref={emailRef} />*
        <br />
        Phone Number: <input type="text" ref={phoneNumRef} />*
        <br />
        City: <input type="text" ref={cityRef} />*
        <br />
        State: <input type="text" ref={stateRef} />*
        <br />
        Instrument: <input type="text" ref={instrumentRef} />*
        <br />
        Instrument Quantity: <input type="text" ref={instrumentNumRef} />*
        <br />
        <input type="submit" value="Donate" />
      </form>
    </>
  );
}
