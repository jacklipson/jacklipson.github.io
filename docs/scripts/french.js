const units = JSON.parse(
  document.getElementById("french-data").textContent
);

const CLOSE_ANSWER_THRESHOLD = 0.7;
const MIN_INPUT_WIDTH = 16;

function normalizeAnswer(answer) {
  return answer
    .replace(/\([^)]*\)/g, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’`]/g, "'")
    .replace(/[‐-‒–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function getSimilarityTargets(answer) {
  const cleanedAnswer = normalizeAnswer(answer);

  return [...new Set([
    cleanedAnswer,
    ...cleanedAnswer.split("/").map(part => part.trim()),
  ])].filter(Boolean);
}

function levenshteinDistance(first, second) {
  let previousRow = Array.from(
    { length: second.length + 1 },
    (_, index) => index
  );

  for (let row = 1; row <= first.length; row++) {
    const currentRow = [row];

    for (let column = 1; column <= second.length; column++) {
      const substitutionCost =
        first[row - 1] === second[column - 1] ? 0 : 1;

      currentRow[column] = Math.min(
        previousRow[column] + 1,
        currentRow[column - 1] + 1,
        previousRow[column - 1] + substitutionCost
      );
    }

    previousRow = currentRow;
  }

  return previousRow[second.length];
}

function calculateSimilarity(first, second) {
  const maxLength = Math.max(first.length, second.length);

  return maxLength === 0
    ? 1
    : 1 - levenshteinDistance(first, second) / maxLength;
}

function containsAllAnswerWords(userAnswer, answerPart) {
  const userWords = new Set(userAnswer.split(" "));
  const answerWords = answerPart.split(" ");

  return answerWords.every(word => userWords.has(word));
}

function setInputWidth(input, length = input.value.length) {
  input.style.width = `${Math.max(MIN_INPUT_WIDTH, length + 1)}ch`;
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;

  return element;
}

function shuffle(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

function togglePractice(button, renderPractice) {
  const unitId = Number(button.dataset.unit);
  const unit = units.find(({ id }) => id === unitId);
  const container = document.getElementById(`practice-${unitId}`);

  if (container.dataset.open === "true") {
    container.replaceChildren();
    container.style.display = "none";
    container.dataset.open = "false";
    return;
  }

  container.style.display = "block";
  container.dataset.open = "true";
  renderPractice(unit, container);
}

function renderVocabulary(unit, container) {
  const vocabulary = shuffle(unit.vocab);

  if (vocabulary.length === 0) {
    container.replaceChildren(
      createElement("p", "definition", "no vocabulary here yet.")
    );
    return;
  }

  let questionIndex = 0;
  let wordsLeft = vocabulary.length;
  const counter = createElement("p", "words-left", `words left: ${wordsLeft}`);

  function renderNextQuestion() {
    questionIndex %= vocabulary.length;

    const question = vocabulary[questionIndex];
    const row = createElement("div", "question-row");
    const feedback = createElement("span", "feedback");

    const englishColumn = createElement("div", "answer-column");
    englishColumn.append(
      createElement("span", "answer-label", "english"),
      createElement("span", "definition", question.definition)
    );

    const frenchColumn = createElement("div", "answer-column");
    const input = document.createElement("input");
    input.placeholder = "french";
    setInputWidth(input, MIN_INPUT_WIDTH - 1);
    input.addEventListener("input", () => setInputWidth(input));
    frenchColumn.append(
      createElement("span", "answer-label", "french"),
      input
    );

    const buttonsColumn = createElement("div", "answer-column");
    const spacer = createElement("span", "answer-label", "\u00a0");
    spacer.style.visibility = "hidden";

    const buttonsRow = createElement("div", "check-buttons");
    const hintButton = createElement("button", "unit-button", "hint");
    const nextButton = createElement("button", "unit-button", "skip");
    const checkButton = createElement("button", "unit-button", "check");

    buttonsRow.append(hintButton, nextButton, checkButton);
    buttonsColumn.append(spacer, buttonsRow);

    let answeredWrong = false;

    function showAnswer() {
      input.value = question.answer;
      input.readOnly = true;
      setInputWidth(input, question.answer.length);
      checkButton.style.display = "none";
      hintButton.style.display = "none";
      nextButton.textContent = "Next";
    }

    function advanceQuestion() {
      questionIndex++;
      renderNextQuestion();
    }

    function showCloseFeedback() {
      feedback.textContent = "close!";
      feedback.classList.add("close");
      showAnswer();
    }

    function checkAnswer() {
      // Correctness requires an exact match with the entire answer.
      if (input.value === question.answer) {
        wordsLeft = Math.max(0, wordsLeft - 1);
        counter.textContent = `words left: ${wordsLeft}`;
        advanceQuestion();
        return { correct: true, close: false };
      }

      // Slash-separated parts are comparison targets for closeness only.
      const userAnswer = normalizeAnswer(input.value);
        const similarity = Math.max(
        ...getSimilarityTargets(question.answer).map(answer => {
            if (containsAllAnswerWords(userAnswer, answer)) return 1;
            return calculateSimilarity(userAnswer, answer);
        })
        );

      if (similarity >= CLOSE_ANSWER_THRESHOLD) {
        showCloseFeedback();
        return { correct: false, close: true };
      }

      feedback.textContent = "✗";
      feedback.classList.remove("close");
      return { correct: false, close: false };
    }

    hintButton.onclick = () => {
      const revealedLength = input.value.length;

      if (revealedLength < question.answer.length) {
        input.value = question.answer.slice(0, revealedLength + 1);
        setInputWidth(input);
      }

      if (input.value.length >= question.answer.length) showAnswer();
      input.focus();
    };

    nextButton.onclick = () => {
      if (nextButton.textContent === "Next") {
        advanceQuestion();
      } else {
        showAnswer();
      }
    };

    checkButton.onclick = checkAnswer;

    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;

      event.preventDefault();

      if (
        !input.value.trim() ||
        nextButton.textContent === "Next" ||
        answeredWrong
      ) {
        nextButton.click();
        return;
      }

      const result = checkAnswer();
      if (!result.correct && !result.close) answeredWrong = true;
    });

    row.append(englishColumn, frenchColumn, buttonsColumn, feedback);
    container.replaceChildren(counter, row);
    input.focus();
  }

  renderNextQuestion();
}

function renderGrammar(unit, container) {
  container.replaceChildren(
    createElement("p", "definition", "No grammar here yet.")
  );
}

document
  .querySelectorAll('[data-mode="vocab"]')
  .forEach(button =>
    button.addEventListener("click", () =>
      togglePractice(button, renderVocabulary)
    )
  );

document
  .querySelectorAll('[data-mode="grammar"]')
  .forEach(button =>
    button.addEventListener("click", () =>
      togglePractice(button, renderGrammar)
    )
  );