const countryName = document.querySelector("input[type='text']");
const btn = document.querySelector("input[type='submit']");
const ui = new UI();
const xhr = new API();
console.log(xhr);
btn.addEventListener("click", () => {
  fat();
});
document.addEventListener("keyup", (e) => {
  console.log(e.keyCode);
  if (e.keyCode == 13) {
    fat();
  }
});
function fat() {
  xhr
    .get(`https://restcountries.eu/rest/v2/name/${countryName.value}`)
    .then((data) => {
      ui.create(data);
    });
}
