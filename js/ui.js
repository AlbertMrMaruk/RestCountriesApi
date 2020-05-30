const country = document.querySelector(".country");
class UI {
  create(data) {
    console.log(data);
    console.log(country);
    country.className += " block";
    country.innerHTML = `
    <div>
    <img class="image" src='${data[0].flag}'/>
    </div>
    <ul>
      <li><h1 class='title'>${data[0].name}</h1></li>
      <li>Capital: ${data[0].capital}</li>
      <li>Borders: ${data[0].borders}</li>
      <li>Population: ${data[0].population}</li>
      <li>Region: ${data[0].region}</li>
    </ul>
  `;
  }
}
