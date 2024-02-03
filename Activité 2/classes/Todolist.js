import Tache from './Tache.js';

export default class Todolist {
  #listeTaches = [];

  /**
   * valeur par défaut du tri des tâches : ▼ décroissant
   * @var {string}
   */
  ordreTriDefaut = "▼";

  constructor() {
    this.#récupérerListeDuLocalStorage();
    this.afficherLesTaches();
  }

  set listeTaches(listeTaches) {
    this.#listeTaches = listeTaches;
  }

  get listeTaches() {
    return this.#listeTaches;
  }

  #enregistrerListeDansLocalStorage() {
    let listeTachesJSON = {};
    this.#listeTaches.forEach(Tache => {
      listeTachesJSON["tache " + Tache.id] = Tache.objetToJSON;
    })
    localStorage.setItem('listeTaches', JSON.stringify(listeTachesJSON));
  }

  #récupérerListeDuLocalStorage() {
    if (localStorage.getItem('listeTaches')) {
      let tachesJSON = JSON.parse(localStorage.getItem('listeTaches'));


      // Object.values(tachesJSON).forEach((tache)=> {
      //   console.log(tache); // donne le même résultat que ci-dessous
      // })


      for (let TacheAConstruire in tachesJSON) {
        TacheAConstruire = tachesJSON[TacheAConstruire];
        let ObjetTache = new Tache(TacheAConstruire.titre, TacheAConstruire.échéance, TacheAConstruire.priorité.classe, TacheAConstruire.id);
        this.listeTaches.push(ObjetTache);
      }
    } else {
      this.listeTaches = [];
    }
  }

  afficherLesTaches() {
    document.querySelector('.listeDesTaches').innerHTML = "";
    if (this.#listeTaches.length > 0) {
      this.#listeTaches.forEach(tache => {
        tache.creerHTML();
      });
    } else {
      this.afficherPasDeTache();
    }
  }

  afficherPasDeTache(){
    document.querySelector('.listeDesTaches').innerHTML = "<center>Vous n'avez pas encore de tâches !</center>";
  }

  EnregistrerNouvelleTache(tache) {
    this.#listeTaches.push(tache);
    this.#enregistrerListeDansLocalStorage();
  }

  supprimerLaTache(idTache) {
    idTache = idTache.split("-")[1];
    let newListe = [];
    this.#listeTaches.forEach(tache => {
      if (tache.id != idTache) {
        newListe.push(tache);
      }
    })
    this.#listeTaches = newListe;
    this.#enregistrerListeDansLocalStorage();
    if (this.#listeTaches.length === 0) {
      this.afficherPasDeTache();
    }
  }

  trierLesTaches() {
    // document.querySelector('.listeDesTaches').innerHTML = "";
    const filtre = document.getElementById('filtre');
    const ordre = document.querySelector('.ordre');
    if (ordre.textContent === this.ordreTriDefaut) {
      ordre.textContent = "▲";
      ordre.style.paddingTop = 0;
      ordre.style.paddingBottom = "2px";
    } else {
      ordre.textContent = "▼";
      ordre.style.paddingTop = "2px";
      ordre.style.paddingBottom = 0;
    }
    this.#triDuTableau(filtre.value, ordre.textContent);
    this.afficherLesTaches();
  }

  #triDuTableau(filtre, ordre) {
    switch (filtre) {
      case "priorité":
        this.#TriParPriorité(ordre);
        break;
      case "dateÉchéance":
        this.#triParDate(ordre);
        break;
      case "alpha":
        this.#triParAlpha(ordre);
        break;

      default:
        break;
    }
  }

  #TriParPriorité(ordre) {
    let tri = [];
    for (let i = 0; i < 3; i++) {
      let prio = (i === 0) ? "élevée" : (i === 1) ? "moyenne" : "basse";
      this.#listeTaches.forEach(tache => {
        if (tache.priorité.classe === prio) {
          tri.push(tache);
        }
      })
    }
    if (ordre === this.ordreTriDefaut) {
      this.#listeTaches = tri;
    } else {
      this.#listeTaches = tri.reverse();
    }
  }

  #triParDate(ordre) {
    function dateEcheance(a, b) {
      a = new Date(a.échéanceToDate);
      b = new Date(b.échéanceToDate);
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    this.#listeTaches.sort(dateEcheance);

    if (ordre !== this.ordreTriDefaut) {
      this.#listeTaches = this.#listeTaches.reverse();
    }
  }

  #triParAlpha(ordre) {
    function alpha(a, b) {
      a = a.titre.toLowerCase()
      b = b.titre.toLowerCase()
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    this.#listeTaches.sort(alpha);

    if (ordre !== this.ordreTriDefaut) {
      this.#listeTaches = this.#listeTaches.reverse();
    }
  }
} 