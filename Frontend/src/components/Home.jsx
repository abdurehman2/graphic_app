import laptopImage from "../assets/image-removebg-preview.png";

export default function HomePage() {
  return (
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="flex flex-col justify-center flex-grow px-6"
    >
      {/* Main Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Content */}
        <div className="md:w-2/3 text-center md:text-left px-8 py-4">
          <h2 className="text-3xl font-bold">
            GRAPHiC: Code Comments Classifier
          </h2>
          <p className="mt-2 text-lg flex flex-col items-center md:items-start">
            Overabundance and lack of structure in code comments, along with
            outdated code, pose significant challenges to software maintenance
            processes, impeding productivity. This research investigates the
            application of multi-class classification to enhance the efficiency
            and accuracy of managing and maintaining such codebases.
          </p>
          <div className="mx-auto flex flex-col items-center">
            <p className="mt-4 text-lg text-gray-600">
              Accepted at 2025 IEEE/ACM International Workshop on Natural
              Language-Based Software Engineering (NLBSE)
            </p>
            <a
              href="https://conf.researchr.org/"
              className="text-[#00798e] font-semibold no-underline hover:underline"
            >
              To be presented at ICSE 2025 in Ottawa, Canada
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col justify-center items-center sm:flex-row gap-4 max-w-md mx-auto">
            <a href="/Classifier">
              <button
                className="cursor-pointer text-white px-6 py-2 shadow-md hover:bg-blue-700 font-bold"
                style={{ backgroundColor: "#00798e" }}
              >
                GO TO CLASSIFIER
              </button>
            </a>
            <a
              href="https://conf.researchr.org/details/icse-2025/nlbse-2025-papers/12/GRAPHiC-Utilizing-Graph-Structures-and-Class-Weights-in-Code-Comment-Classification-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="cursor-pointer text-white px-6 py-2 shadow-md hover:bg-teal-700 font-bold"
                style={{ backgroundColor: "#00798e" }}
              >
                RESEARCH PAPER
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
          <img
            src={laptopImage}
            alt="Laptop with code"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
