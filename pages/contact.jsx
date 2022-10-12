import ContactForm from "../components/contactform";

export default function Contact() {
  return (
    <div className="flex flex-col items-center  w-50 p-10 mt-20">
      <h1 className="text-4xl my-2">Contact me!</h1>
      <p className="my-2">
        I would love to get in touch with you. Send me an e-mail, contact me on
        LinkedIn
      </p>

      <div className="flex flex-col sm:flex-row sm:gap-10 my-4 p-2">
        <div className="flex flex-col gap-5">
          <button className="bg-blush text-dark-grey p-2 rounded">
            <a href="https://github.com/Petra-Johansson">
              {" "}
              Go to my LinkedIn and get in touch
            </a>
          </button>
          <button className="bg-blush text-dark-grey p-2 rounded"onClick={() =>
                    (window.location.href = "mailto: johansson.m.petra@gmail.com")
                    }>
         
              {" "}
              Send me an e-mail
          
          </button>
        </div>
        <div>
            <p className="mb-2">Or simply fill out this contact form!</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
