export default class Tache {
    #id;
    #titre;
    #echeance;
    #priorite;

    constructor(titre, echeance, priorite, id = "À créer") {
        this.id = id;
        this.titre = titre;
        this.echeance = echeance;
        this.priorite = priorite;

        this.creerHTML();
    }

    #creerIdAleatoire() {
        return Math.floor(Math.random() * 100000);
    }

    creerHTML() {
        let HTML = `<div id="tache-${this.id}">
          <span id="check-${this.id}" class="checkbox">□</span>
          <div>
            <h3>${this.titre}</h3>
            <span class="priorite ${this.priorite.classe}">${this.priorite.intitule}</span>
            <span class="dateEcheance">${this.echeance}</span>
          </div>
          <hr>
        </div>`
        document.querySelector('.listeDesTaches').innerHTML += HTML;
    }

    #definirPriorite(priorite) {
        switch (priorite) {
            case "basse":
                return { classe: "basse", intitule: "Non prioritaire" };
                break;
            case "moyenne":
                return { classe: "moyenne", intitule: "Prioritaire" };
                break;
            case "elevee":
                return { classe: "elevee", intitule: "Urgente" };
                break;

            default:
                return { classe: "basse", intitule: "Non prioritaire" };
                break;
        }
    }

    get id() {
        return this.#id;
    }
    set id(ID) {
        this.#id = (ID === "À créer") ? this.#creerIdAleatoire() : ID;
    }
    get titre() {
        return this.#titre;
    }
    set titre(titre) {
        this.#titre = titre;
    }
    get echeance() {
        return new Intl.DateTimeFormat("fr-FR", { dateStyle: 'long' }).format(new Date(this.#echeance));
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

    get objetToJSON() {
        let objet = { id: this.id, titre: this.titre, echeance: this.echeanceToDate, priorite: this.priorite };
        return objet;
    }

    
}