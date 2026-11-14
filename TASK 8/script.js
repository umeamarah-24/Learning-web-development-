const answers = { q1: "a", q2: "b", q3: "a", q4: "b", q5: "c" };

const form = document.getElementById("quiz-form");
const message = document.getElementById("message");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const restartBtn = document.getElementById("restart-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let score = 0;
  const total = Object.keys(answers).length;

  for (const question in answers) {
    const selected = form.querySelector('input[name="' + question + '"]:checked');
    if (!selected) {
      message.textContent = "Please answer all questions before submitting.";
      return;
    }
    if (selected.value === answers[question]) {
      score++;
    }
  }

  message.textContent = "";
  scoreEl.textContent = score + "/" + total;

  if (score >= 4) {
    feedbackEl.textContent = "Great job! You really know your stuff!";
  } else if (score >= 3) {
    feedbackEl.textContent = "Good effort! A little more practice and you'll ace it.";
  } else {
    feedbackEl.textContent = "Keep learning and try again!";
  }

  form.classList.add("hidden");
  result.classList.remove("hidden");
});

restartBtn.addEventListener("click", function () {
  form.reset();
  message.textContent = "";
  result.classList.add("hidden");
  form.classList.remove("hidden");
});