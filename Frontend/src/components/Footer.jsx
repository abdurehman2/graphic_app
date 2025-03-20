export default function Footer() {
  return (
    <footer
      className="py-4 text-white text-center"
      style={{
        background: "linear-gradient(135deg, black, #0097b2, #0097b2, black)",
      }}
    >
      <p className="text-sm font-semibold">© 2025 GRAPHiC | Developed by</p>
      <div className="flex justify-center space-x-4 mt-1 text-sm">
        <span className="hover:text-gray-300">
          i211101 - Muhammad Riyaan Tariq
        </span>
        <span className="hover:text-gray-300">
          i211151 - Abdur Rehman Afzal
        </span>
        <span className="hover:text-gray-300">
          i211159 - Muhammad Haris Athar
        </span>
      </div>
    </footer>
  );
}
