const units = JSON.parse(document.getElementById("french-data").textContent);

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
  const normalizedAnswer = normalizeAnswer(answer);
  const alternatives = normalizedAnswer.split("/").map(part => part.trim());
  return [...new Set([normalizedAnswer, ...alternatives])].filter(Boolean);
}

function levenshteinDistance(first, second) {
  let previousRow = Array.from({ length: second.length + 1 }, (_, index) => index);

  for (let row = 1; row <= first.length; row++) {
    const currentRow = [row];

    for (let column = 1; column <= second.length; column++) {
      const substitutionCost = first[row - 1] === second[column - 1] ? 0 : 1;
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
  const longestLength = Math.max(first.length, second.length);
  if (longestLength === 0) return 1;

  return 1 - levenshteinDistance(first, second) / longestLength;
}

function containsAllWords(userAnswer, expectedAnswer) {
  const userWords = new Set(userAnswer.split(" "));
  return expectedAnswer.split(" ").every(word => userWords.has(word));
}

function getAnswerSimilarity(userAnswer, answer) {
  const normalizedUserAnswer = normalizeAnswer(userAnswer);
  const targets = getSimilarityTargets(answer);

  return Math.max(
    0,
    ...targets.map(target =>
      containsAllWords(normalizedUserAnswer, target)
        ? 1
        : calculateSimilarity(normalizedUserAnswer, target)
    )
  );
}

function setInputWidth(input, length = input.value.length) {
  input.style.width = `${Math.max(MIN_INPUT_WIDTH, length + 0.5)}ch`;
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createButton(label) {
  const button = createElement("button", "unit-button", label);
  button.type = "button";
  return button;
}

function createAnswerInput(placeholder) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  setInputWidth(input, MIN_INPUT_WIDTH - 1);
  input.addEventListener("input", () => setInputWidth(input));
  return input;
}

function shuffle(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function togglePractice(button, renderPractice) {
  const unitKey = button.dataset.unit;
  const mode = button.dataset.mode;

  const unit = units.find(({ id }) => String(id) === unitKey);

  const container = document.getElementById(`practice-${unitKey}`);

  if (!unit || !container) return;

  if (container.dataset.open === "true" && container.dataset.mode === mode) {
    container.replaceChildren();
    container.style.display = "none";
    container.dataset.open = "false";
    return;
  }

  container.style.display = "block";
  container.dataset.open = "true";
  container.dataset.mode = mode;
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
    const frenchColumn = createElement("div", "answer-column");
    const buttonsColumn = createElement("div", "answer-column");
    const input = createAnswerInput("french");

    englishColumn.append(
      createElement("span", "answer-label", "english"),
      createElement("span", "definition", question.definition)
    );

    frenchColumn.append(createElement("span", "answer-label", "french"), input);

    const spacer = createElement("span", "answer-label", "\u00a0");
    spacer.style.visibility = "hidden";

    const buttonsRow = createElement("div", "check-buttons");
    const hintButton = createButton("hint");
    const nextButton = createButton("skip");
    const checkButton = createButton("check");
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

    function checkAnswer() {
      // Vocabulary answers must match exactly to count as correct.
      if (input.value === question.answer) {
        wordsLeft = Math.max(0, wordsLeft - 1);
        counter.textContent = `words left: ${wordsLeft}`;
        advanceQuestion();
        return { correct: true, close: false };
      }

      if (getAnswerSimilarity(input.value, question.answer) >= CLOSE_ANSWER_THRESHOLD) {
        feedback.textContent = "close!";
        feedback.classList.add("close");
        showAnswer();
        return { correct: false, close: true };
      }

      feedback.textContent = "✗";
      feedback.classList.remove("close");
      return { correct: false, close: false };
    }

    function submitAnswer() {
      if (!input.value.trim() || nextButton.textContent === "Next" || answeredWrong) {
        nextButton.click();
        return;
      }

      const result = checkAnswer();
      if (!result.correct && !result.close) answeredWrong = true;
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
      if (nextButton.textContent === "Next") advanceQuestion();
      else showAnswer();
    };

    checkButton.onclick = submitAnswer;

    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      submitAnswer();
    });

    row.append(englishColumn, frenchColumn, buttonsColumn, feedback);
    container.replaceChildren(counter, row);
    input.focus();
  }

  renderNextQuestion();
}

function renderGrammar(unit, container) {
  let grammar = shuffle(unit.grammar || []);

  if (grammar.length === 0) {
    container.replaceChildren(
      createElement("p", "definition", "no grammar here yet.")
    );
    return;
  }

  let questionIndex = 0;
  let questionsLeft = grammar.length;
  const counter = createElement("p", "words-left", `questions left: ${questionsLeft}`);

  function renderNextQuestion() {
    if (questionIndex >= grammar.length) {
      questionIndex = 0;
      grammar = shuffle(unit.grammar || []);
    }

    const question = grammar[questionIndex];
    const title = createElement("p", "definition", question.definition || "");
    const answers = question.type === "multiple" ? question.rows : [question];

    if (!Array.isArray(answers) || answers.length === 0) {
      container.replaceChildren(
        counter,
        title,
        createElement("p", "feedback", "This entry needs prompt/answer data.")
      );
      return;
    }

    const rowStates = answers.map(item => ({
      item,
      input: null,
      feedback: null,
      resolved: false,
      correct: false,
    }));

    const maxAnswerWidth = Math.max(
      MIN_INPUT_WIDTH,
      ...answers.map(item => (item.answer || "").length + 1)
    );

    const rows = createElement("div", "grammar-rows");
    rows.style.setProperty("--answer-width", `${maxAnswerWidth}ch`);

    rowStates.forEach(state => {
      const row = createElement("div", "question-row grammar-row");
      const prompt = createElement("span", "answer-label", state.item.prompt || "");
      const input = createAnswerInput("french");
      const feedback = createElement("span", "feedback");

      state.input = input;
      state.feedback = feedback;
      row.append(feedback, prompt, input);
      rows.append(row);
    });

    const controls = createElement("div", "check-buttons");
    const header = createElement("div", "grammar-header");
    const hintButton = createButton("hint");
    const skipButton = createButton("skip");
    const checkButton = createButton("check");
    controls.append(hintButton, skipButton, checkButton);
    header.append(title, controls);

    function reshuffleQuestions() {
      questionIndex = 0;
      grammar = shuffle(unit.grammar || []);
    }

    function advanceQuestion(countAsCorrect = false) {
      questionIndex++;

      if (countAsCorrect) {
        questionsLeft--;
        if (questionsLeft === 0) questionsLeft = grammar.length;
        counter.textContent = `questions left: ${questionsLeft}`;
      }

      if (questionIndex >= grammar.length) reshuffleQuestions();
      renderNextQuestion();
    }

    function checkRow(state) {
      const expected = state.item.answer || "";
      const actual = state.input.value;
      state.feedback.classList.remove("close");

      if (actual && actual === expected) {
        state.resolved = true;
        state.correct = true;
        state.input.readOnly = true;
        state.feedback.textContent = "✓";
        return;
      }

      if (actual && getAnswerSimilarity(actual, expected) >= CLOSE_ANSWER_THRESHOLD) {
        state.resolved = true;
        state.correct = false;
        state.input.value = state.item.answer;
        state.input.readOnly = true;
        setInputWidth(state.input, state.input.value.length);
        state.feedback.textContent = "close!";
        state.feedback.classList.add("close");
        return;
      }

      state.correct = false;
      state.feedback.textContent = actual ? "✗" : "";
    }

    function showGrammarAnswers() {
      rowStates.forEach(state => {
        state.input.value = state.item.answer || "";
        state.input.readOnly = true;
        setInputWidth(state.input, state.input.value.length);
        state.resolved = true;
      });
      hintButton.style.display = "none";
      checkButton.style.display = "none";
      skipButton.textContent = "Next";
    }

    let lastCheckedAnswers = rowStates.map(state => state.input.value);

    function checkGrammarAnswers() {
      rowStates.filter(state => !state.resolved).forEach(checkRow);
      lastCheckedAnswers = rowStates.map(state => state.input.value);

      if (rowStates.every(state => state.resolved && state.correct)) {
        advanceQuestion(true);
      }
    }

    function submitGrammarAnswers() {
      if (skipButton.textContent === "Next") {
        skipButton.click();
        return;
      }

      const answersUnchanged = rowStates.every(
        (state, index) => state.input.value === lastCheckedAnswers[index]
      );

      if (answersUnchanged) {
        skipButton.click();
        return;
      }

      checkGrammarAnswers();
    }

    checkButton.addEventListener("click", submitGrammarAnswers);

    rows.addEventListener("keydown", event => {
      if (event.key !== "Enter" || !event.target.matches("input")) return;
      event.preventDefault();
      event.stopPropagation();
      submitGrammarAnswers();
    });

    hintButton.onclick = () => {
      rowStates.forEach(state => {
        if (state.resolved) return;
        const answer = state.item.answer || "";
        const revealedLength = state.input.value.length;

        if (revealedLength < answer.length) {
          state.input.value = answer.slice(0, revealedLength + 1);
          setInputWidth(state.input);
        }
      });

      const allAnswersRevealed = rowStates.every(state => {
        const answer = state.item.answer || "";
        return state.resolved || state.input.value.length >= answer.length;
      });

      if (allAnswersRevealed) {
        showGrammarAnswers();
      } else {
        const firstUnresolved = rowStates.find(state => !state.resolved);
        (firstUnresolved || rowStates[0]).input.focus();
      }
    };

    skipButton.onclick = () => {
      if (skipButton.textContent === "Next") advanceQuestion();
      else showGrammarAnswers();
    };

    container.replaceChildren(counter, header, rows);
    rowStates[0].input.focus();
  }

  renderNextQuestion();
}

document.querySelectorAll('[data-mode="vocab"]').forEach(button => {
  button.addEventListener("click", () => togglePractice(button, renderVocabulary));
});

document.querySelectorAll('[data-mode="grammar"]').forEach(button => {
  button.addEventListener("click", () => togglePractice(button, renderGrammar));
});