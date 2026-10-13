const units = JSON.parse(
  document.getElementById("french-data").textContent
);

// Vocab handler

document.querySelectorAll('[data-mode="vocab"]').forEach(button => {
    button.addEventListener("click", () => {
        const unit = units.find(u => u.id === Number(button.dataset.unit));
        const container = document.getElementById(`practice-${unit.id}`);

        // Toggle the practice area
        if (container.dataset.open === "true") {
            container.replaceChildren();
            container.style.display = "none";
            container.dataset.open = "false";
            return;
        }

        container.style.display = "block";
        container.dataset.open = "true";
        container.replaceChildren();

        // Shuffle the vocabulary into a random order
        const shuffledVocab = [...unit.vocab];

        for (let i = shuffledVocab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledVocab[i], shuffledVocab[j]] = [
            shuffledVocab[j],
            shuffledVocab[i]
        ];
        }

        let index = 0;
        let wordsLeft = shuffledVocab.length;

        // Words left counter
        const counter = document.createElement("p");
        counter.className = "words-left";
        counter.textContent = `words left: ${wordsLeft}`;

        function nextQuestion() {
        // Loop back to the beginning when all words have been shown
        if (index >= unit.vocab.length) {
            index = 0;
        }

        const question = shuffledVocab[index];

        const row = document.createElement("div");
        row.className = "question-row";

        // English definition
        const english = document.createElement("div");
        english.className = "answer-column";

        const englishLabel = document.createElement("span");
        englishLabel.className = "answer-label";
        englishLabel.textContent = "english";

        const definition = document.createElement("span");
        definition.className = "definition";
        definition.textContent = question.definition;

        english.append(englishLabel, definition);

        // French answer
        const french = document.createElement("div");
        french.className = "answer-column";

        const frenchLabel = document.createElement("span");
        frenchLabel.className = "answer-label";
        frenchLabel.textContent = "french";

        const input = document.createElement("input");
        input.placeholder = "french";
        input.style.width = "16ch";

        input.addEventListener("input", () => {
            input.style.width = `${Math.max(16, input.value.length + 1)}ch`;
        });

        french.append(frenchLabel, input);

        // Buttons column
        const checkColumn = document.createElement("div");
        checkColumn.className = "answer-column";

        const spacer = document.createElement("span");
        spacer.className = "answer-label";
        spacer.textContent = "\u00a0";
        spacer.style.visibility = "hidden";

        const buttonsRow = document.createElement("div");
        buttonsRow.className = "check-buttons";

        const check = document.createElement("button");
        check.className = "unit-button";
        check.textContent = "check";

        const hint = document.createElement("button");
        hint.className = "unit-button";
        hint.textContent = "hint";

        const skip = document.createElement("button");
        skip.className = "unit-button";
        skip.textContent = "skip";

        buttonsRow.append(hint, skip, check);
        checkColumn.append(spacer, buttonsRow);

        const feedback = document.createElement("span");

        // Switch to Next after revealing the answer
        function showAnswer() {
            input.value = question.answer;
            input.readOnly = true;

            // Resize the textbox to fit the answer
            input.style.width = `${Math.max(16, question.answer.length + 1)}ch`;

            check.style.display = "none";
            hint.style.display = "none";

            skip.textContent = "Next";
            }

        // Reveal one additional letter with each Hint click
        hint.onclick = () => {
            const answer = question.answer;
            const currentLength = input.value.length;

            if (currentLength < answer.length) {
                input.value = answer.slice(0, currentLength + 1);

                // Resize the textbox to fit the revealed text
                input.style.width = `${Math.max(16, input.value.length + 1)}ch`;
            }

            // If the whole answer is revealed, show only Next
            if (input.value.length >= answer.length) {
                showAnswer();
            }

            input.focus();
            };

        // Skip reveals the answer; Next advances without changing the count
        skip.onclick = () => {
            if (skip.textContent === "Next") {
            index++;
            nextQuestion();
            return;
            }

            showAnswer();
        };

        // Check answer and automatically advance when correct
        check.onclick = () => {
            if (
            input.value.trim().toLowerCase() ===
            question.answer.toLowerCase()
            ) {
            wordsLeft = Math.max(0, wordsLeft - 1);
            counter.textContent = `Words left: ${wordsLeft}`;

            index++;
            nextQuestion();
            } else {
            feedback.textContent = "✗";
            }
        };

        // Enter checks the answer; a second Enter reveals it if wrong
        let answeredWrong = false;

        input.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                event.preventDefault();

                if (skip.textContent === "Next") {
                    skip.click();
                } else if (answeredWrong) {
                    skip.click();
                } else {
                    const correct =
                        input.value.trim().toLowerCase() ===
                        question.answer.toLowerCase();

                    if (correct) {
                        check.click();
                    } else {
                        check.click();
                        answeredWrong = true;
                    }
                }
            }
        });

        row.append(english, french, checkColumn, feedback);
        container.replaceChildren(counter, row);

        // Focus the textbox for every new question
        input.focus();
        }

        if (!unit.vocab.length) {
            const message = document.createElement("p");
            message.className = "definition";
            message.textContent = "no vocabulary here yet.";
            container.replaceChildren(message);
            return;
        }

        nextQuestion();
    });
});

// Grammar handler

document.querySelectorAll('[data-mode="grammar"]').forEach(button => {
    button.addEventListener("click", () => {
        const unit = units.find(u => u.id === Number(button.dataset.unit));
        const container = document.getElementById(`practice-${unit.id}`);

        if (container.dataset.open === "true") {
            container.replaceChildren();
            container.style.display = "none";
            container.dataset.open = "false";
            return;
        }

        container.style.display = "block";
        container.dataset.open = "true";

        const message = document.createElement("p");
        message.className = "definition";
        message.textContent = "No grammar here yet.";

        container.replaceChildren(message);
    });
});