const apiUrl = 'https://api.openbrewerydb.org/breweries';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const breweriesContainer = document.getElementById('breweries-container');

searchBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(`${apiUrl}?by_name=${searchInput.value}`);
    const breweries = await response.json();
    displayBreweries(breweries);
  } catch (error) {
    console.log(error);
  }
});

function displayBreweries(breweries) {
  breweriesContainer.innerHTML = '';
  breweries.forEach((brewery) => {
    const breweryDiv = document.createElement('div');
    breweryDiv.classList.add('brewery');

    const name = document.createElement('h2');
    name.innerText = brewery.name;
    breweryDiv.appendChild(name);

    const type = document.createElement('p');
    type.innerText = `Type: ${brewery.brewery_type}`;
    breweryDiv.appendChild(type);

    const address = document.createElement('p');
    address.innerText = `Address: ${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}, ${brewery.country}`;
    breweryDiv.appendChild(address);

    const website = document.createElement('p');
    website.innerHTML = `Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a>`;
    breweryDiv.appendChild(website);

    const phone = document.createElement('p');
    phone.innerText = `Phone: ${brewery.phone}`;
    breweryDiv.appendChild(phone);

    breweriesContainer.appendChild(breweryDiv);
  });
}