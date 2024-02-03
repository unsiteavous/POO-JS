export default class Tache {
    #id;
    #titre;
    #échéance;
    #priorité;

    constructor(titre, échéance, priorité, id = "À créer") {
        this.id = id;
        this.titre = titre;
        this.échéance = échéance;
        this.priorité = priorité;

        this.creerHTML();
    }

    #créerIdAléatoire() {
        return Math.floor(Math.random() * 100000);
    }

    creerHTML() {
        let HTML = `<div id="tache-${this.id}">
          <span id="check-${this.id}" class="checkbox">□</span>
          <div>
            <h3>${this.titre}</h3>
            <span class="priorité ${this.priorité.classe}">${this.priorité.intitulé}</span>
            <span class="dateÉchéance">${this.échéance}</span>
          </div>
          <hr>
        </div>`
        document.querySelector('.listeDesTaches').innerHTML += HTML;
    }

    #definirPriorité(priorité) {
        switch (priorité) {
            case "basse":
                return { classe: "basse", intitulé: "Non prioritaire" };
                break;
            case "moyenne":
                return { classe: "moyenne", intitulé: "Prioritaire" };
                break;
            case "élevée":
                return { classe: "élevée", intitulé: "Urgente" };
                break;

            default:
                return { classe: "basse", intitulé: "Non prioritaire" };
                break;
        }
    }

    get id() {
        return this.#id;
    }
    set id(ID) {
        this.#id = (ID === "À créer") ? this.#créerIdAléatoire() : this.#créerIdAléatoire();
    }
    get titre() {
        return this.#titre;
    }
    set titre(titre) {
        this.#titre = titre;
    }
    get échéance() {
        return new Intl.DateTimeFormat("fr-FR", { dateStyle: 'long' }).format(new Date(this.#échéance));
    }
    get échéanceToDate() {
        return this.#échéance;
    }
    set échéance(échéance) {
        this.#échéance = new Date(échéance);
    }
    get priorité() {
        return this.#priorité;
    }
    set priorité(priorité) {
        this.#priorité = this.#definirPriorité(priorité);
    }

    get objetToJSON() {
        let objet = { id: this.id, titre: this.titre, échéance: this.échéanceToDate, priorité: this.priorité };
        return objet;
    }

}