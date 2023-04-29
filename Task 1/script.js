/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const weightForm = document.querySelector('form');
const outpoutDiv = document.getElementById('output');

if (weightForm) {
  weightForm.addEventListener('submit', (e) => {
    e.preventDefault();
    outpoutDiv.textContent = '';
    renderWeights();
  });
}

const renderWeights = () => {
  const kgInput = document.getElementById('search');
  const userKgValue = kgInput.value;
  const lbHeading = document.createElement('h3');
  const gHeading = document.createElement('h3');
  const ozHeading = document.createElement('h3');
  const lbWeight = userKgValue * 2.2046;
  const gWeight = userKgValue / 0.001;
  const ozWeight = userKgValue * 35.274;
  lbHeading.textContent = `Your weight in pounds is ${lbWeight.toFixed(2)} lb`;
  gHeading.textContent = `Your weight in grams is ${gWeight} g`;
  ozHeading.textContent = `Your weight in ounces is ${ozWeight.toFixed(2)} oz`;
  outpoutDiv.append(lbHeading, gHeading, ozHeading);
};
