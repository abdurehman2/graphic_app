import laptopImage from "../assets/image-removebg-preview.png";

export default function AboutUs() {
  return (
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="flex flex-col justify-center flex-grow px-6"
    >
      {/* Main Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Content */}
        <div className="md:w-2/3 text-center md:text-left px-8 py-4">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <p className="mt-2 text-lg text-gray-700">
            We are a team of AI researchers and software developers from{" "}
            <span className="font-semibold">FAST-NUCES</span> dedicated to
            advancing software engineering through machine learning and natural
            language processing.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our project, <span className="font-semibold">GRAPHiC</span>, focuses
            on improving code maintainability by classifying and analyzing code
            comments. We aim to provide developers with insights into their code
            documentation, improving readability and maintainability.
          </p>

          {/* Contact Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            <ul className="mt-2 text-lg text-gray-700">
              <li>
                📧 <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@graphic-ai.com"
                  className="text-[#00798e] font-semibold no-underline hover:underline"
                >
                  info@graphic-ai.com
                </a>
              </li>
              <li>
                🎓 <span className="font-medium">University:</span> FAST-NUCES
              </li>
              <li>
                🏆 <span className="font-medium">ICSE 2025 Paper:</span>{" "}
                <a
                  href="https://conf.researchr.org/details/icse-2025/nlbse-2025-papers/12/GRAPHiC-Utilizing-Graph-Structures-and-Class-Weights-in-Code-Comment-Classification-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00798e] font-semibold no-underline hover:underline"
                >
                  Read here
                </a>
              </li>
              <li>
                🔗 <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/harisathar04/graphic-nlbse25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00798e] font-semibold no-underline hover:underline"
                >
                  View Code
                </a>
              </li>
            </ul>
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
