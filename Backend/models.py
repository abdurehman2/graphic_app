from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

langs = ["java", "python", "pharo"]

labels = {
    "java": ["summary", "Ownership", "Expand", "usage", "Pointer", "deprecation", "rational"],
    "python": ["Usage", "Parameters", "DevelopmentNotes", "Expand", "Summary"],
    "pharo": ["Keyimplementationpoints", "Example", "Responsibilities", "Classreferences", "Intent", "Keymessages", "Collaborators"]
}

models = {}
tokenizers = {}

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

for lang in langs:
    model_name = f"harisathar04/graphic-nlbse-{lang}"
    print(f"Loading model for {lang}...")
    models[lang] = AutoModelForSequenceClassification.from_pretrained(model_name).to(device)
    tokenizers[lang] = AutoTokenizer.from_pretrained(model_name)

def classify_comments(lang, comments):
    """Classifies comments and returns multiple categories per comment."""
    if lang not in models:
        return {"error": f"Language {lang} not supported"}

    model = models[lang]
    tokenizer = tokenizers[lang]

    model.eval()
    inputs = tokenizer(comments, truncation=True, padding=True, return_tensors="pt")
    input_ids = inputs["input_ids"].to(device)
    attention_mask = inputs["attention_mask"].to(device)

    with torch.no_grad():
        outputs = model(input_ids=input_ids, attention_mask=attention_mask)
        logits = torch.sigmoid(outputs.logits)  # Use sigmoid for multi-label classification
        predictions = (logits > 0.5).int().cpu().numpy()  # Thresholding at 0.5

    categorized_predictions = []
    for i, comment in enumerate(comments):
        predicted_labels = [labels[lang][j] for j in range(len(labels[lang])) if predictions[i][j] == 1]
        categorized_predictions.append({
            "comment": comment,
            "categories": predicted_labels if predicted_labels else ["Uncategorized"]
        })

    return categorized_predictions
