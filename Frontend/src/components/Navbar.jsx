export default function Navbar() {
  return (
    <nav
      className="py-4 flex items-center px-8 text-white"
      style={{
        background: "linear-gradient(135deg, black, #0097b2, #0097b2, black)",
      }}
    >
      <h1 className="text-2xl font-bold w-3/4">GRAPHiC</h1>
      <div className="flex justify-between items-center space-x-6 text-white font-semibold w-1/4">
        <a href="/" className="hover:text-black">
          HOME
        </a>
        <a href="/Classifier" className="hover:text-black">
          CLASSIFIER
        </a>
        <a href="/About-Us" className="hover:text-black">
          ABOUT US
        </a>
      </div>
    </nav>
  );
}
