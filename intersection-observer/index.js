const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  alert("You clicked the heading!");
});

const rootDiv = document.querySelector(".intersection-container");
rootDiv.addEventListener("click", () => {
  rootDiv.classList.toggle("lightblue");
});

const target = document.querySelector(".sentinel");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("The sentinel is visible in the viewport!");
      observer.unobserve(target);
      console.log("The observer has stopped observing the sentinel.");
    }
  });
});

observer.observe(target);
