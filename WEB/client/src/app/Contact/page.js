"use client";
import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <ContactCard />
        </div>
    )
}

const ContactCard = () => {
  const [name, setname] = useState(" ");
  const [mail, setmail] = useState(" ");

  const [message, setmessage] = useState(" ");

  const pushdata = () => {
    console.log("message sent");
    toast("message sent");

    const data = {
      name: name,
      mail: mail,
      message: message,
    };

    fetch("https://test-pz8u.onrender.com/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setname(" ");
        setmail(" ");
        setmessage(" ");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto max-w-md">
      {/* <ToastContainer /> */}
      <div className="flex flex-col m-10">
        <div className="text-center transform -skew-y-6 text-xl ">
          <h1 className="bg-blue-700 text-white">Get in Contact</h1>
          <h1 className="bg-lime-400">Shoot me a message</h1>
        </div>
        <div className="text-left transform -skew-y-6">
          <h1 className="font-bold ">Name</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setname(e.target.value)}
          />
          <h1 className="font-bold ">Email</h1>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setmail(e.target.value)}
          />
          <h1 className="font-bold ">Comment or message</h1>
          <textarea
            rows="4"
            cols="25"
            placeholder="Enter your message"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "lime lime",
            }}
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          <button
            className=" bg-yellow-500 p-2  text-white "
            onClick={() => pushdata()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
