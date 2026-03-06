Handlebars.registerHelper("uppercase", function (str) {
  return str.toUpperCase();
});

const source = document.getElementById("list-template").innerHTML;
const template = Handlebars.compile(source);

const data = {
  products: [
    { name: "Keyboard", price: 80, inStock: true },
    { name: "Mouse", price: 40, inStock: false },
  ],
};

function render(viewModel) {
  const html = template(viewModel);
  document.getElementById("app").innerHTML = html;
}

render(data);
