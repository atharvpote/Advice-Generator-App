const adviceID = document.querySelector("#advice-id");
const adviceQuote = document.querySelector("#advice-quote");
const newAdviceButton = document.querySelector("#new-advice");

window.addEventListener("load", updateQuote);
newAdviceButton.addEventListener("click", updateQuote);

async function updateQuote() {
  let response = await fetch("https://api.adviceslip.com/advice");
  response = await response.json();

  const { id, advice } = response.slip;

  adviceID.innerText = id;
  adviceQuote.innerText = `"${advice}"`;
}
