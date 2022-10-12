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
    }).then((res) => {
      console.log("Response recieved");
      if (res.status === 200 || 250) {
        console.log("Response succeeded, message has been sent");
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <form className="flex flex-col">
      <input
        type="text"
        name="name"
        value={name}
        className="p-3 my-1"
        placeholder="Your name"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        name="email"
        value={email}
        className="p-3 my-1"
        placeholder="your e-mail"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <textarea
        name="message"
        value={message}
        rows="3"
        className="p-3 my-1"
        placeholder="Write your message here!"
        required
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <input
        type="submit"
        value="Send message"
        className="text-white bg-purple hover:bg-white hover:text-purple p-3 my-2"
        onClick={(e) => {
          sendMessage(e);
        }}
      />
    </form>
  );
}
