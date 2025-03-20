import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar className="sticky top-0 z-50 p-4" />
        <div className="flex-grow flex">
          <AboutUs />
        </div>
        <Footer />
      </div>
    </>
  );
}
