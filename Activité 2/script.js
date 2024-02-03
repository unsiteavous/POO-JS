// Import des class nécessaires.
import Tache from "./classes/Tache.js";
import Todolist from "./classes/Todolist.js";

const titreTache = document.querySelector('#titreTache');
const échéanceTache = document.querySelector('#échéanceTache');
const prioritéTache = document.querySelector('#prioritéTache');
const submitButton = document.querySelector('.submitButton');
const ordreButton = document.querySelector('.ordre');
const filtreButton = document.querySelector('#filtre');
let listeDesTaches = new Todolist();
casesCochables();

submitButton.addEventListener('click', () => {
  listeDesTaches.EnregistrerNouvelleTache(new Tache(titreTache.value, échéanceTache.value, prioritéTache.value));
  document.querySelector('center') ? document.querySelector('center').remove() : '';
  casesCochables();
})

ordreButton.addEventListener('click', () => {
  listeDesTaches.trierLesTaches();
  casesCochables();
})
filtreButton.addEventListener('change', () => {
  listeDesTaches.trierLesTaches();
  casesCochables();
})

function casesCochables() {
  let checkboxes = document.querySelectorAll('.checkbox');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked')
      let id = 'tache-' + checkbox.id.split('-')[1];
      animationSuppression(id);
      setTimeout(()=>{
        
        // suppression
        if (checkbox.classList.contains('checked')) {
          listeDesTaches.supprimerLaTache(id);
          document.getElementById(id).remove();
        }
      },8000)
    })
  })
}

function animationSuppression(id){
  document.querySelector(`#${id} hr`).classList.toggle('fullHr');
  document.querySelector(`#${id}`).classList.toggle('disappear');
}