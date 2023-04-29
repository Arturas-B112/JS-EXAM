/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById('output');

const getCars = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  renderCards(data);
};

const renderCards = (arr) => {
  arr.forEach((el) => {
    const brandCard = document.createElement('div');
    brandCard.classList.add('brand-card');
    const brandHeading = document.createElement('h3');
    brandHeading.textContent = el.brand;
    brandHeading.classList.add('brand-name');
    const carsList = document.createElement('ul');
    el.models.forEach((carModel) => {
      const carsListItem = document.createElement('li');
      carsListItem.textContent = carModel;
      carsList.append(carsListItem);
    });
    brandCard.append(brandHeading, carsList);
    output.append(brandCard);
  });
};

getCars();
