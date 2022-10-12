import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
export default MyApp;
