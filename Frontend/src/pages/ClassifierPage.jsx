import Navbar from "../components/Navbar";
import Classifier from "../components/Classifier";
import Footer from "../components/Footer";

export default function ClassifierPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar className="sticky top-0 z-50 p-4" />
        <div className="flex-grow flex">
          <Classifier />
        </div>
        <Footer />
      </div>
    </>
  );
}
