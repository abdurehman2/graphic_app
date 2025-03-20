import re

def detect_language(file_path):
    """Detects the programming language based on file extension."""
    if file_path.endswith(".java"):
        return "java"
    elif file_path.endswith(".py"):
        return "python"
    elif file_path.endswith(".st"):
        return "pharo"
    else:
        raise ValueError("Unsupported file format. Please upload a Java, Python, or Pharo file.")

def extract_comments(file_obj):
    """Extracts and preprocesses comments from Java, Python, and Pharo files."""
    language = detect_language(file_obj.filename)
    code_lines = file_obj.read().decode("utf-8").split("\n")  # Read file correctly

    if language == "java":
        return preprocess_comments(extract_java_comments(code_lines))
    elif language == "python":
        return preprocess_comments(extract_python_comments(code_lines))
    elif language == "pharo":
        return preprocess_comments(extract_pharo_comments(code_lines))

    return []

def extract_java_comments(code_lines):
    """Extracts comments from Java files line by line."""
    comments = []
    multi_line_comment = False

    for line in code_lines:
        line = line.strip()

        if line.startswith("/*"):  # Start of multi-line comment
            multi_line_comment = True
            comments.append(line)
            continue

        if multi_line_comment:
            comments.append(line)
            if line.endswith("*/"):  # End of multi-line comment
                multi_line_comment = False
            continue

        if "//" in line:  # Single-line comment
            comments.append(line.split("//", 1)[1].strip())

    return comments

def extract_python_comments(code_lines):
    """Extracts comments from Python files line by line."""
    comments = []
    multi_line_comment = False
    delimiter = None

    for line in code_lines:
        line = line.strip()

        if (line.startswith("'''") and line.endswith("'''") and len(line) > 3) or \
           (line.startswith('"""') and line.endswith('"""') and len(line) > 3):
            comments.append(line.strip("'\""))
            continue

        if line.startswith("'''") or line.startswith('"""'):
            if multi_line_comment:
                comments.append(line.strip("'\""))
                multi_line_comment = False
                delimiter = None
            else:
                multi_line_comment = True
                delimiter = "'''" if line.startswith("'''") else '"""'
                comments.append(line.strip("'\""))
            continue

        if multi_line_comment:
            comments.append(line)
            if line.endswith(delimiter):
                multi_line_comment = False
                delimiter = None
            continue

        if "#" in line:
            comments.append(line.split("#", 1)[1].strip())

    return comments

def extract_pharo_comments(code_lines):
    """Extracts comments from Pharo files (which use double quotes "")."""
    comments = []
    multi_line_comment = False
    comment_block = []

    for line in code_lines:
        line = line.strip()

        if line.startswith('"') and line.endswith('"') and len(line) > 1:
            # Single-line comment
            comments.append(line.strip('"'))
            continue

        if line.startswith('"'):  # Start of multi-line comment
            multi_line_comment = True
            comment_block.append(line.strip('"'))
            continue

        if multi_line_comment:
            comment_block.append(line.strip('"'))
            if line.endswith('"'):  # End of multi-line comment
                comments.append(" ".join(comment_block))
                multi_line_comment = False
                comment_block = []
            continue

    return comments


def preprocess_comments(comments):
    """Preprocesses comments by removing noise and leading special characters."""
    processed_comments = []
    
    for comment in comments:
        # Remove leading special characters like "*", "/", "-" at the beginning of comments
        cleaned_comment = re.sub(r"^[*/#\-]+", "", comment).strip()

        # Remove comments that contain only special characters or are empty
        if not re.search(r"[a-zA-Z0-9]", cleaned_comment):  
            continue

        processed_comments.append(cleaned_comment)

    return processed_comments


