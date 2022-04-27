const adviceID = document.querySelector("#advice-id");
const adviceQuote = document.querySelector("#advice-quote");
const newAdviceBtn = document.querySelector("#new-advice");

window.addEventListener("load", getQuote);
newAdviceBtn.addEventListener("click", getQuote);

async function getQuote() {
  let response = await fetch("https://api.adviceslip.com/advice");
  response = await response.json();

  const { id, advice } = response.slip;

  adviceID.innerText = id;
  adviceQuote.innerText = `"${advice}"`;
}
