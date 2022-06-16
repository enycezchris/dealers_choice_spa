const axios = require("axios");
const state = {};

// GETTING HTML ELEMENTS
const piratesList = document.querySelector("#pirates-list");
const strawhatsList = document.querySelector("#strawhats-list");
const whitebeardsList = document.querySelector("#whitebeards-list");
const rogersList = document.querySelector("#rogers-list");

// HASH CHANGE
window.addEventListener("hashchange", async () => {
  const hash = window.location.hash.slice(1) * 1;
  if (hash === 1) {
    await getStrawhats();
    renderStrawhats();
  }
  if (hash === 2) {
    await getWhitebeards();
    renderWhitebeards();
  }
  if (hash === 3) {
    await getRogers();
    renderRogers();
  }
  else {
      renderPirates();
  }
});

// GETTING DATA
const getPirates = async function () {
  const response = await axios.get("/api/pirates");
  const pirates = response.data;
  state.pirates = pirates;
  //   console.log("pirates:", pirates);
  renderPirates();
};

const getStrawhats = async function () {
  const response = await axios.get("/api/strawhats");
  const strawhats = response.data;
  state.strawhats = strawhats;
  //   console.log("sw", strawhats);
  renderStrawhats();
};

const getWhitebeards = async function () {
  const response = await axios.get("/api/whitebeards");
  const whitebeards = response.data;
  state.whitebeards = whitebeards;
  //   console.log("sw", strawhats);
  renderWhitebeards();
};

const getRogers = async function () {
  const response = await axios.get("/api/rogers");
  const rogers = response.data;
  state.rogers = rogers;
  //   console.log("sw", strawhats);
  renderRogers();
};

// RENDERING DATA
const renderPirates = async function () {
  const hash = window.location.hash.slice(1) * 1;
  const html = state.pirates
    .map((pirate) => {
      // console.log("pirateName:", pirate.name);
      return `<li> <a href="#${pirate.id}" >
      ${pirate.name}
      </li>`;
    })
    .join("");
  piratesList.innerHTML = html;
};

const renderStrawhats = async function () {
  const html = state.strawhats
    .map((strawhat) => {
      // console.log("Strawhat:" , strawhat);
      return `
      <td> Name: ${strawhat.name} <br> Role: ${strawhat.role} <br> Worth: ${strawhat.worth}  </td> 
      `;
    })
    .join("");
  strawhatsList.innerHTML = html;
};

const renderWhitebeards = async function () {
  const html = state.whitebeards
    .map((whitebeard) => {
      // console.log("Strawhat:" , strawhat);
      return `
        <td> Name: ${whitebeard.name} <br> Role: ${whitebeard.role} <br> Worth: ${whitebeard.worth}  </td> 
        `;
    })
    .join("");
  whitebeardsList.innerHTML = html;
};

const renderRogers = async function () {
  const html = state.rogers
    .map((roger) => {
      // console.log("Strawhat:" , strawhat);
      return `
        <td> Name: ${roger.name} <br> Role: ${roger.role} <br> Worth: ${roger.worth}  </td> 
        `;
    })
    .join("");
  rogersList.innerHTML = html;
};

const browser = async function () {
  await getPirates();
  renderPirates();
};

browser();
