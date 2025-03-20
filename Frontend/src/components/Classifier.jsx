import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Import autoTable explicitly

const Classifier = () => {
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState("");
  const [chartData, setChartData] = useState([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setPredictions(null);
    setChartData([]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/classify", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to classify the file.");
      }

      console.log("Received data:", data);

      if (data.results && Array.isArray(data.results)) {
        setPredictions(data.results);
        generateChartData(data.results);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const generateChartData = (results) => {
    const categoryCount = {};
    results.forEach((item) => {
      item.categories.forEach((category) => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });
    });

    const formattedData = Object.entries(categoryCount).map(
      ([name, value]) => ({
        name,
        value,
      })
    );
    setChartData(formattedData);
  };

  const downloadPDF = () => {
    if (!predictions) return;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Classification Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Total Comments: ${predictions.length}`, 20, 30);

    const tableData = predictions.map((item, index) => [
      index + 1,
      item.comment,
      item.categories.join(", "),
    ]);

    autoTable(doc, {
      // Use the explicitly imported autoTable
      head: [["#", "Comment", "Categories"]],
      body: tableData,
      startY: 40,
      styles: { fontSize: 10, cellWidth: "wrap" },
      columnStyles: { 1: { cellWidth: 100 } },
    });

    doc.save("classification_report.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 w-full">
      <div className="bg-white p-6 rounded-xl shadow-md w-3/4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Upload a File for Classification
        </h2>

        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full border p-2 mb-4"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Upload & Classify
        </button>

        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
      </div>

      {chartData.length > 0 && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
          <h3 className="text-xl font-bold text-center">
            Comment Category Distribution
          </h3>
          <PieChart width={400} height={300} className="mx-auto">
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          <p className="text-center mt-4 font-semibold">
            Total Comments: {predictions.length}
          </p>
        </div>
      )}

      {predictions && predictions.length > 0 && (
        <button
          onClick={downloadPDF}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Download Report (PDF)
        </button>
      )}
    </div>
  );
};

export default Classifier;
