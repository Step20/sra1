import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavPageComponent from "../components/Nav/NavPageComponent.js";
import NavSmComponent from "../components/Nav/NavSmComponent";
import Fade from "react-reveal/Fade";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm("service_n7ddn6y", "template_snt0ywh", form.current, {
        publicKey: "AUxAb2bYZjrWADpRX",
      })
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <>
      <NavSmComponent />
      <NavPageComponent />
      <div className="cont-container" id="con">
        <div className="cont-content">
          <Fade>
            <h1> Contact Us </h1>{" "}
          </Fade>
          <Fade up delay={1000}>
            <div className="form-content mx-auto">
              <form ref={form} onSubmit={sendEmail} className="text-center">
                <div className="fieldset " style={{ width: "100%" }}>
                  <label>Name</label>
                  <div className="flex justify-between ">
                    <div className="my-auto" style={{ width: "49%" }}>
                      <input
                        required
                        type="text"
                        name="user_name"
                        placeholder="Firstname"
                      />
                    </div>
                    <div className="my-auto" style={{ width: "49%" }}>
                      <input type="text" placeholder="Lastname" />
                    </div>
                  </div>
                </div>
                <div className="fieldset">
                  <label>Phone Number</label>
                  <input />
                </div>
                <div className="fieldset">
                  <label>Email</label>
                  <input required type="email" name="user_email" />
                </div>
                <div className="fieldset">
                  <label>Topic of Message</label>
                  <input />
                </div>
                <div className="fieldset">
                  <label>Message</label>
                  <textarea required name="message">
                    {" "}
                  </textarea>
                </div>
                <button type="submit" value="Send" disabled={isSubmitting}>
                  Submit Form
                </button>
                {stateMessage && <p className="text-black">{stateMessage}</p>}
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
