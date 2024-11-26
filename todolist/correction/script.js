// Import des class necessaires.
import Tache from "./classes/Tache.js";
import Todoliste from "./classes/Todoliste.js";

const titreTache = document.querySelector('#titreTache');
const echeanceTache = document.querySelector('#echeanceTache');
const prioriteTache = document.querySelector('#prioriteTache');
const submitButton = document.querySelector('.submitButton');
const ordreButton = document.querySelector('.ordre');
const filtreButton = document.querySelector('#filtre');
let listeDesTaches = new Todoliste();
let intervals = [];
casesCochables();

submitButton.addEventListener('click', () => {
  if (verifierSiChampsPleins()) {
    listeDesTaches.EnregistrerNouvelleTache(new Tache(titreTache.value, echeanceTache.value, prioriteTache.value));
    document.querySelector('center') ? document.querySelector('center').remove() : '';
    casesCochables();
  }
})

function verifierSiChampsPleins() {
  if (titreTache.value.length === 0 || echeanceTache.value.length === 0) {
    let erreur = document.createElement('p');
    erreur.textContent = "Tous les champs sont obligatoires";
    erreur.classList.add('erreur');
    erreur.id = 'alert-champ-vide';
    document.querySelector('.submitButton').before(erreur);
    setTimeout(() => { document.getElementById('alert-champ-vide').remove() }, 2000);
    return false;
  } else {
    return true;
  }
}

ordreButton.addEventListener('click', () => {
  listeDesTaches.trierLesTaches('ordre');
  casesCochables();
})
filtreButton.addEventListener('change', () => {
  listeDesTaches.trierLesTaches('filtre');
  casesCochables();
})

function casesCochables() {
  let checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked')
      let id = 'tache-' + checkbox.id.split('-')[1];
      animationSuppression(id);
      if (checkbox.classList.contains('checked')) {
        intervals.push({
          id: id,
          set: setTimeout(() => {

            // suppression
            listeDesTaches.supprimerLaTache(id);
            document.getElementById(id).remove();

          }, 6000)
        })
      } else {
        intervals.forEach(interval => {
          if (interval.id === id) {
            clearTimeout(interval.set);
            intervals.splice(intervals.indexOf(interval), 1);
          }
        })
      }
    })
  })
}

function animationSuppression(id) {
  document.querySelector(`#${id} hr`).classList.toggle('fullHr');
  document.querySelector(`#${id}`).classList.toggle('disappear');
}