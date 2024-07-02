window.addEventListener("DOMContentLoaded", init);

const ANSWER_LENGTH = 5;
const MAXIMUM_GUESSED_WORDS = 6;

const state = {
  secret: null,
  currentRow: 0,
  currentGuess: "",
  isLoading: false,
  done: false,
};

async function init() {
  document.addEventListener("keydown", handleKey);
  state.secret = await fetchSecret();
}

async function fetchSecret() {
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const { word } = await res.json();

  return word;
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

async function isValidWord(word) {
  setLoading(true);
  try {
    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word }),
      "Content-Type": "application/json",
    });

    const data = await res.json();

    const { validWord } = data;

    return validWord;
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

async function handleKey(e) {
  if (state.isLoading || state.done) return;

  let action = e.key;

  if (state.currentRow > MAXIMUM_GUESSED_WORDS) {
    resetGame();
  }

  if (action === "Backspace") {
    backspace();
  } else if (action === "Enter") {
    await commit();
  } else if (isLetter(action)) {
    addLetter(action);
    renderLetter(action);
  } else {
    return;
  }
}

function backspace() {
  if (!state.currentGuess.length > 0) return;
  renderLetter(" ");
  state.currentGuess = state.currentGuess.substring(
    0,
    state.currentGuess.length - 1
  );
}

function addLetter(letter) {
  if (state.currentGuess.length < ANSWER_LENGTH) {
    state.currentGuess += letter;
  } else {
    state.currentGuess =
      state.currentGuess.substring(0, state.currentGuess.length - 1) + letter;
  }
}

async function commit() {
  const word = state.currentGuess;

  if (word.length < ANSWER_LENGTH) return;

  const isValid = await isValidWord(word);

  if (!isValid) return alertInvalidWord();

  paintLetters();

  state.currentRow++;

  if (state.secret === word) {
    alert("you win the game");
    state.done = true;
  }
  if (state.currentRow === 6) {
    alert("you loose the game");
    state.done = true;
  }

  state.currentGuess = "";
}

function paintLetters() {
  const repetitionsActualWord = state.secret.split("").reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (acc[curr] || 0) + 1,
    };
  }, {});

  const repetitionsGuessWord = state.currentGuess
    .split("")
    .reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: (acc[curr] || 0) + 1,
      };
    }, {});

  const guessParts = state.currentGuess.split("");

  for (let i = 0; i < ANSWER_LENGTH; i++) {
    const guessLetter = guessParts[i];
    const actualLetter = state.secret[i];

    if (guessLetter === actualLetter) {
      lettersList[i + state.currentRow * ANSWER_LENGTH].classList.add(
        "word__letter--correct"
      );
    } else if (
      state.secret.includes(guessLetter) &&
      repetitionsActualWord[guessLetter] === repetitionsGuessWord[guessLetter]
    ) {
      lettersList[i + state.currentRow * ANSWER_LENGTH].classList.add(
        "word__letter--close"
      );
    } else {
      lettersList[i + state.currentRow * ANSWER_LENGTH].classList.add(
        "word__letter--incorrect"
      );
    }
  }
}

const lettersList = document.querySelectorAll(".word__letter");

function renderLetter(letter) {
  const letterIndex = state.currentGuess.length - 1;
  const moveToRow = state.currentRow * ANSWER_LENGTH;
  lettersList[letterIndex + moveToRow].textContent = letter;
}

function getCurrentWordLetters() {
  const startWordIndex = state.currentRow * ANSWER_LENGTH;
  const endWordIndex = startWordIndex + ANSWER_LENGTH;
  return Array.from(lettersList).slice(startWordIndex, endWordIndex);
}

function alertInvalidWord() {
  const wordLetters = getCurrentWordLetters();
  wordLetters.forEach((letterEl) => {
    letterEl.classList.add("word__letter--invalid");
  });
  setTimeout(() => {
    wordLetters.forEach((letterEl) => {
      letterEl.classList.remove("word__letter--invalid");
    });
  }, 2000);
}

const spinnerEl = document.querySelector(".spinner");
function setLoading(isLoading) {
  state.isLoading = isLoading;
  spinnerEl.classList.toggle("spinner--visible", isLoading);
}
