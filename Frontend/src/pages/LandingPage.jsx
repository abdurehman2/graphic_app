import Navbar from "../components/Navbar";
import HomePage from "../components/Home";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar className="sticky top-0 z-50 p-4" />
        <div className="flex-grow flex">
          <HomePage />
        </div>
        <Footer />
      </div>
    </>
  );
}
