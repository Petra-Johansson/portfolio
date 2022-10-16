import { useState } from "react";


export default function ContactForm() {
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("sending....");

    let messdata = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messdata),
    })
      .then((res) => {
        if (res.status === 200 || 250) {
          setSent(true);
          setName("");
          setEmail("");
          setMessage("");
          console.log("Message has been sent with this body:", messdata);
        } else {
          console.log("E-mail could not be sent");
        }
      })
      .catch((e) => console.log(e));
  };

  return sent ? (
    <p>Thank you for your message. I will get back to you ASAP :) </p>
  ) : (
    <form className="flex flex-col">
      <label htmlFor="name" className="flex justify-start mt-2">
        Your name
      </label>
      <input
        type="text"
        name="name"
        value={name}
        className="p-3 my-1 rounded"
        placeholder="goes here"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="email" className="flex justify-start mt-2">
        The e-mail you want..
      </label>
      <input
        type="email"
        name="email"
        value={email}
        className="p-3 my-1 rounded"
        placeholder="to be contacted on"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="message" className="flex justify-start mt-2">
        Your message
      </label>
      <textarea
        name="message"
        value={message}
        rows="3"
        className="p-3 my-1 rounded"
        placeholder="Write your message here!"
        required
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />

      <input
        type="submit"
        value="Send message"
        className={
          "text-white bg-purple hover:bg-white hover:text-purple hover:cursor-pointer p-3 my-2 rounded"
        }
        onClick={(e) => {
          sendMessage(e);
        }}
      />
    </form>
  );
}
