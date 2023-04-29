/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUsersBtn = document.getElementById('btn');
const output = document.getElementById('output');
const infoMsg = document.getElementById('message');

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    renderCards(data);
  } catch (err) {
    console.error(err);
  }
};

const renderCards = (arr) => {
  arr.forEach((el) => {
    const cardContainer = document.createElement('div');
    const avatarImgEl = document.createElement('img');
    const loginEl = document.createElement('h3');
    avatarImgEl.src = el.avatar_url;
    avatarImgEl.alt = 'User avatar';
    loginEl.textContent = el.login;
    cardContainer.classList.add('card-container');
    cardContainer.append(avatarImgEl, loginEl);
    output.append(cardContainer);
  });
};

showUsersBtn.addEventListener('click', (e) => {
  infoMsg.remove();
  getUsers();
});
