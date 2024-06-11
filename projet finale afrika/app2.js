let inscription = document.getElementById("b1");
let ferme = document.querySelector(".inscrip");
let modaleinscription = document.querySelector(".modale-inscription");
inscription.addEventListener("click", () => {
  modaleinscription.style.display = "flex";
});
ferme.addEventListener("click", () => {
  modaleinscription.style.display = "none";
});

let seconnecter = document.getElementById("b2");
let ferme2 = document.querySelector(".inscrip2");
let modaleseconnecter = document.querySelector(".modale-seconnecter");
seconnecter.addEventListener("click", () => {
  modaleseconnecter.style.display = "flex";
});
ferme2.addEventListener("click", () => {
  modaleseconnecter.style.display = "none";
});

let afrikadirect = document.getElementById("direct");
afrikadirect.addEventListener("click", () => [
  (window.location = "accueil.html"),
]);
let nomInscript = document.getElementById("nom-inscript");
let paswordInscript = document.getElementById("pasword-inscript");
let gemailInscript = document.getElementById("gemail-inscript");
