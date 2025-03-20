from flask import Flask, request, jsonify
from flask_cors import CORS
from models import classify_comments
from utils import extract_comments, detect_language

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

@app.route("/classify", methods=["POST"])
def classify():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    uploaded_file = request.files["file"]
    
    try:
        lang = detect_language(uploaded_file.filename)  # Detect language
        comments = extract_comments(uploaded_file)  # Extract comments

        if not comments:
            return jsonify({"error": "No comments found in the file"}), 400

        predictions = classify_comments(lang, comments)  # Get classified categories

        response_data = {"language": lang, "results": predictions}
        print("Response Data: ", response_data)
        return jsonify(response_data)

    except ValueError as e:
        return jsonify({"error": str(e)}), 400

@app.route("/", methods=["GET"])
def home():
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True)
