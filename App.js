const correctAnswer = ["A", "B", "A", "B", "B"];
const form = document.querySelector(".quiz-form");
const showResult = document.querySelector(".result");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let score = 0;
   const userAnswer = [
      form.q1.value,
      form.q2.value,
      form.q3.value,
      form.q4.value,
      form.q5.value,
   ];

   // * Check answer

   userAnswer.forEach((answer, index) => {
      if (answer === correctAnswer[index]) {
         score += 20;
      }
   });
   // * Show result on page
   scrollTo(0, 0);
   showResult.classList.remove("d-none");
   // * Result animation
   let output = 0;
   const timer = setInterval(() => {
      showResult.querySelector("span").textContent = `${output}%`;
      if (output === score) {
         clearInterval(timer);
      } else {
         output++;
      }
   }, 10);
});
