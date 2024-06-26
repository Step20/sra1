import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function FooterComponent() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Failed to subscribe. Please try again later.");
    } else {
      try {
        const response = await fetch(
          "https://connect.mailerlite.com/api/subscribers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYmZmOWNhMTk3ODdhOWE1NDMwMTk4ZDdkMDg4NzYxZmJkODdjMmI5YzczNzZjZmMxMjYxZmRjNWIzOWFjYzBkYjE1NmZiNDI3MmExYTFlMzEiLCJpYXQiOjE3MTkwMjM3MTcuMjgyMjQ3LCJuYmYiOjE3MTkwMjM3MTcuMjgyMjQ5LCJleHAiOjQ4NzQ2OTczMTcuMjc5NTUxLCJzdWIiOiIxMDA2NjU3Iiwic2NvcGVzIjpbXX0.ZqLv6HGEO2S4mv8IcvtZeKD6cOsO5GDjOVW7l6MyGQx5m4VwaEAQyg2JSTPED5LEqBKuKC2FqEunGQNzXBEmcEG_aqIALqFPf5KuXWXlfZXpIcJBRVf9CTTvtI7SrgJ6OipgRS7Sc7VPw9DCrPgucOlwrsmy7KOLuTitTI1lpj63yW5kyQPVSdLFfTv45TCGvENOVQVcsC0jMxPpKcThwRVrsPgx_O3ky5aWgGKdTkWk9vfxe2JrknQhURUvRF0ttW1Udoruf4Pq9XYLG6ixob4Kf1p8azgFuDTJwYah_tF1Z-v74FZ9_6CwlUEli4StVmGGPXTNW0BDV6unoqtIO5ed4yKn9xBOoVqiPQSSy66ehniUOe0qmlAg2RvTqELiJRxdZIeptrNCN5R2nNSvaNyROU-FjgB3LjdXYJ3PGJ8yntcgK4wZm16gFA878wgL3VCRfFxZVQvkJMIC_NGtG1oaP5DkUOzrzScWtyFKCt7h0MfOE4hGhpbdBZpet_2byFgTi5Y0rZZMGrpzgO68BtYV_GE7czMQZ1d2rQhaRDOOohE3b1srrnuwqKud8EbLdISaWG7_t0y0SGi79O32wS56fW4-E0lrOkUixImd7-B0JOWNcUxIRawRBSyCrut4IX_UNmftVPrdrjh4936ok9V_OV-WoFo9D8OpFPJJc-I
`,
            },
            body: JSON.stringify({
              email: email,
              groups: ["124806173739189900"],
            }),
          }
        );

        const data = await response.json();
        console.log(data);

        if (data.errors) {
          setErrorMessage(data?.message);
          return;
        }

        setSuccessMessage("Thank you for joining our newsletter!");
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to subscribe. Please try again later.");
      }
    }
  };

  return (
    <div className="footer-container mx-auto" id="con">
      <div className="top-content flex ">
        <div className="">
          <h4>Contact Us</h4>
          <ul className="space-y-2">
            <li className="">
              <AiOutlinePhone className="icon" /> (+88) 01924 7829
            </li>
            <li className="">
              <AiOutlineMail className="icon mr-2 align-middle" />
              sunrzeacademy@gmail.com
            </li>
            <li>
              <TbLocation className="icon mr-2 align-middle" /> Richmond VA
            </li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul className="space-y-2">
            <li>Resources</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <h4>Newsletter</h4>
          <ul className="space-y-2">
            <li>
              Sign up for the latest news and offers <br></br>from the SRA{" "}
            </li>
            <li>
              <form onSubmit={handleSubmit}>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Enter email address"
                />
                <button className=" mb-2" type="submit">
                  Submit
                </button>
                {errorMessage && <p className="error ">{errorMessage}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
              </form>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="bottom-content flex justify-between align-middle my-auto">
        <div className="icon-group space-x-3 flex">
          <div className="icon-bg ">
            <FiFacebook className="icon " />
          </div>
          <div className="icon-bg">
            <FiInstagram className="icon " />
          </div>
          <div className="icon-bg ">
            <MdOutlineEmail className="icon " />
          </div>
          <div className="icon-bg ">
            <FiYoutube className="icon " />
          </div>
        </div>
        <p className="my-auto align-middle">
          © Copyright 2024 SUN RZE Academy All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
