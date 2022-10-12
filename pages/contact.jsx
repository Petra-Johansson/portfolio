import ContactForm from "../components/contactform";

export default function Contact() {
    return(
        <div className="flex flex-col items-center justify-center w-50 p-10 mt-20">
            <h1>Contact me!</h1>
            <p>I would love to get in touch with you.
                Send me an e-mail, contact me on LinkedIn or simply fill out this contact form!
            </p>
            <ContactForm/>
        </div>
    )
}