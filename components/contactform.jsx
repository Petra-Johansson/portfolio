export default function ContactForm(){
    return(
        <>
        <form className="mt-3 p-4 flex flex-col">
            <input type="email" className="p-3 my-1" placeholder="your e-mail" />
            <textarea rows="3" className="p-3 my-1" placeholder="Write your message here!" />
            <button type="submit" className="text-white bg-purple hover:bg-white hover:text-purple p-3 my-2">Send</button>
        </form>
        </>
    )
}