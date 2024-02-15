export default class Tache {
  #id;
  #titre;
  #echeance;
  #priorite;

  constructor(titre, echeance, priorite, id = "à créer") {
    this.id = id;
    this.titre = titre;
    this.echeance = echeance;
    this.priorite = priorite;
  }

  // ============================================================
  // MÉTHODES
  // ============================================================

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = (id === "à créer") ? this.#idAleatoire() : id;
  }

  get titre() {
    return this.#titre;
  }
  set titre(titre) {
    this.#titre = titre;
  }

  get echeanceFR() {
    return new Intl.DateTimeFormat('fr-FR', { dateStyle: "long" }).format(this.echeanceToDate);
  }
  get echeanceGB() {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: "long" }).format(this.echeanceToDate);
  }
  get echeanceToDate() {
    return this.#echeance;
  }

  set echeance(echeance) {
    this.#echeance = new Date(echeance);
  }

  get priorite() {
    return this.#priorite;
  }
  set priorite(priorite) {
    this.#priorite = this.#definirPriorite(priorite);
  }


  #idAleatoire() {
    return Math.floor(Math.random() * 1000000000);
  }

  #definirPriorite(priorite) {
    switch (priorite) {
      case 'basse':
        return { classe: 'basse', intitule: "non prioritaire" };
        break;
      case 'moyenne':
        return { classe: 'moyenne', intitule: "Prioritaire" };
        break;
      default:
        return { classe: 'elevee', intitule: "Urgente" };
        break;
    }

  }

  creerHTML() {
    let HTML = `<div id="tache-${this.id}">
    <span id="check-${this.id}" class="checkbox">□</span>
    <div>
      <h3>${this.titre}</h3>
      <span class="priorite ${this.priorite.classe}">${this.priorite.intitule}</span>
      <span class="dateEcheance">${this.echeanceFR}</span>
      <hr>
    </div>
  </div>`;
    document.querySelector('.listeDesTaches').innerHTML += HTML;
  }

  objetToJSON(){
    return {'id': this.id, 'titre': this.titre, 'priorite': this.priorite, echeance: this.echeanceToDate};
  }
}