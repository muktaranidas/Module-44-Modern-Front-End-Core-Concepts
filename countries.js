const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  //   console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountriesHTML(country));
  //   console.log(countriesHTML[0]);
  const container = document.getElementById("container");
  container.innerHTML = countriesHTML.join(" ");
};

// option 1
// const getCountriesHTML = (country) => {
//   const { name, flags } = country;
//   return `
//     <div class="country">
//     <h2> ${name.common} </h2>
//     <img src="${flags.png}">
//     </div>
//     `;
// };
// original
// const getCountriesHTML = (country) => {
//   return `
//     <div class="country">
//     <h2> ${country.name.common} </h2>
//     <img src="${country.flags.png}">
//     </div>
//     `;
// };
// Option 2
const getCountriesHTML = ({ name, flags, area, region }) => {
  return `
    <div class="country">

    <h2> ${name.common} </h2>
    <p>Area: ${area}</p>
    <p>Region: ${region}</p>
    <img src="${flags.png}">
    </div>
    `;
};
loadCountries();
