import json

results = []

text = """"""

# Split into individual vocabulary entries first
entries = text.split("^^^")

for entry in entries:
    entry = entry.strip()

    if not entry or "@@@" not in entry:
        continue

    # Split Russian answer from English definition
    answer, definition = entry.split("@@@", 1)

    results.append({
        "definition": definition.strip(),
        "answer": answer.strip()
    })

# Print formatted JSON
print(json.dumps(results, indent=4, ensure_ascii=False))
