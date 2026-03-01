Handlebars.registerHelper("uppercase", function (str) {
  return str.toUpperCase();
});

const source = document.getElementById("card-template").innerHTML;
const template = Handlebars.compile(source);

const data = { name: "Ryan", age: 43, title: "Junior Software Engineer", isAvailable: true };

const viewModel = {
  ...data,
  availabilityMessage: data.isAvailable ? "I am available!" : "I'm taken...sorry for you!",
};

function render(viewModel) {
  const html = template(viewModel);
  document.getElementById("app").innerHTML = html;
}

render(viewModel);
