import Head from "next/head"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Block({ children }) {

    return (
        <main>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
        </main>
    )
} 