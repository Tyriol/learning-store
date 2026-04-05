const h1 = document.querySelector("h1");
const rootDiv = document.querySelector(".intersection-container");
const target = document.querySelector(".sentinel");
const countEl = document.querySelector("#count");
const resetBtn = document.querySelector("#resetButton");

let timesSeen = 0;

function getNiceRandomColor() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 20) + 60; // 60–80%
  const l = Math.floor(Math.random() * 20) + 50; // 50–70%

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function resetCounter() {
  timesSeen = 0;
  countEl.textContent = timesSeen;
  countEl.style.color = "black";
}

h1.addEventListener("click", () => {
  alert("You clicked the heading!");
});

resetBtn.addEventListener("click", resetCounter);

rootDiv.addEventListener("click", () => {
  rootDiv.classList.toggle("lightblue");
});

const handleBottomScrollIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      timesSeen++;
      // If you want to stop observing after the first intersection, uncomment the lines below:
      // observer.unobserve(target);
      // console.log("The observer has stopped observing the sentinel.");
      countEl.textContent = timesSeen;
      countEl.style.color = getNiceRandomColor();
    }
  });
};

// const handleColourChangeIntersection = (entries) => {

const observer = new IntersectionObserver(handleBottomScrollIntersection);

observer.observe(target);
