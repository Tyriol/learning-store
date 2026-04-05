const h1 = document.querySelector("h1");
const rootDiv = document.querySelector(".intersection-container");
const target = document.querySelector(".sentinel");
const countEl = document.querySelector("#count");
const resetBtn = document.querySelector("#resetButton");

let timesSeen = 0;

h1.addEventListener("click", () => {
  alert("You clicked the heading!");
});

resetBtn.addEventListener("click", () => {
  timesSeen = 0;
  countEl.textContent = timesSeen;
});

rootDiv.addEventListener("click", () => {
  rootDiv.classList.toggle("lightblue");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      timesSeen++;
      //   console.log(`The sentinel has been seen ${timesSeen} times.`);
      console.log("The sentinel is visible in the viewport!");
      //   observer.unobserve(target);
      //   console.log("The observer has stopped observing the sentinel.");
      countEl.textContent = timesSeen;
    }
  });
});

observer.observe(target);
