// Créer une classe Barre de vie, qu'on pourra appeler autant de fois qu'on veut.
class BarreDeVie {
  #vie; // stockera les points de vie entre 0 et 100
  #couleur; // stockera la couleur de la barre en fonction des points de vie
  #id; // stockera l'ID aléatoire de l'objet instancié
  #nom; // stockera le nom de l'objet instancié

  // propriété statique qui donne, avec ou sans instanciation, l'élément HTML où l'on crée les barres de vie.
  static affichage = document.querySelector('#affichageBarresDeVie');

  // Si on nous passe les paramètres vie et couleur, on les utilise, sinon on prend les paramètres par défaut.
  constructor(nom, vie = 100, couleur = "green") {

    // On appelle les différents setters (vous remarquez qu'on ne met pas le # comme si on appelait la propriété directement)
    this.nom = nom;
    this.vie = vie;
    this.id = "";
    this.couleur = couleur;

    // On crée notre élément dans le HTML
    // on appelle une méthode de notre classe, en faisant comme
    // avec les variables : this.methode()
    this.creerBarre();
  }

  /**
   * Tous les gettets et setters permettent de mettre à jour et récupérer les valeurs.
   *
   */


  get couleur() {
    return this.#couleur;
  }

  set couleur(couleur) {
    this.#couleur = couleur;
  }

  get nom() {
    return this.#nom
  }

  set nom(nom) {
    if (nom) {
      this.#nom = nom;
    } else {
      // Exemple d'erreur personnalisée : throw permet d'écrire du texte lors d'une erreur, et de stopper l'execution du code.
      throw ("L'objet a besoin d'un nom");
    }
  }
  // getter qui permet d'afficher la vie.
  get vie() {
    return this.#vie;
  }

  set vie(vie) {
    // On vérifie aussi que vie est comprise entre 0 et 100.
    if (vie <= 100 && vie >= 0) {
      this.#vie = vie;
    } else {
      throw ('la vie doit être comprise entre 0 et 100')
    }
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    if (id.length === 0) {
      this.#id = this.idAleatoire(0, 100000000000);
    } else {
      this.#id = id;
    }
  }
  // Getter qui permet de récupérer l'objet conteneur de l'objet en cours.
  get conteneur() {
    let conteneur = document.querySelector('#conteneur' + this.#id);
    return conteneur;
  }
  // Permet de récupérer l'objet barredevie dans le html de l'objet en cours.
  get barredevie() {
    let barredevie = document.querySelector('#barredevie' + this.#id);
    return barredevie;
  }

  // Méthode qui permet de rajouter de la vie.
  // Si la vie actuelle plus la vie ajoutée est inférieur à 100, on additionne la vie actuelle et la vie ajoutée. si elle dépasse 100, on met la vie à 100 (on ne peut pas aller au-dessus).
  // Puis on redessine la barre.
  gagnerVie(vie) {

    if (this.vie + vie <= 100) {
      this.vie += vie;
    } else {
      this.vie = 100;
    }
    this.modifierBarre(this.vie, this.couleur)
  }

  // Méthode pour enlever de la vie.
  // Fonctionne comme gagnerVie.
  // Dans le cas où on atteint zéro, on appelle la fonction mort.
  perdreVie(vie) {
    if (this.vie - vie > 0) {
      this.vie -= vie;
      this.modifierBarre(this.vie, this.couleur)
    } else {
      this.vie = 0;
      this.mort();
    }

  }

  // Méthode qui permet de créer l'élement visuel.
  creerBarre() {
    // Dans l'élément général, on crée tous les éléments contenant la barre de vie.
    BarreDeVie.affichage.innerHTML += "<div id=\"conteneur" + this.id + "\"><div id= \"bordure" + this.id + "\" style=\"width:500px; margin:50px auto; border: 2px solid black;\"><div id=\"barredevie" + this.id + "\" style=\"background-color:" + this.couleur + ";width:" + this.vie + "%; height:20px; text-align:center; color:#FFF;\"></div></div></div>"

    // On récupère ensuite ces différents éléments

    // on écrit la vie dans la barre :
    // on appelle la méthode barredevie de la classe, qui renvoie l'élément html.
    this.barredevie.innerHTML = this.vie + "%";

    // On ajoute deux boutons pour enlever et ajouter de la vie, en faisant appel aux méthodes de l'objet.

    this.conteneur.innerHTML += '<button onclick="' + this.nom + '.perdreVie(10)">Perdre de la vie</button><button onclick="' + this.nom + '.gagnerVie(10)">Gagner de la vie</button>'
  }

  // Méthode qui permet de changer les paramètres de la barre de vie :
  // - la taille de la barre,
  // - la couleur,
  // - le pourcentage écrit dans la barre.
  modifierBarre(vie, couleur) {

    this.barredevie.style.backgroundColor = couleur;
    this.barredevie.style.width = vie + "%";
    this.barredevie.innerHTML = vie + "%";
  }

  //Méthode qui permet, Dans le cas où on meurt, de modifier la barre pour la mettre en rouge, puis d'écrire dedans un petit texte.
  mort() {
    this.modifierBarre(100, 'red');
    this.barredevie.innerHTML = "Tu es mort";
  }

  // Petite méthode qui donne un chiffre aléatoire entre deux valeurs.
  idAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}


// On instancie ensuite notre classe.
let barre = new BarreDeVie('barre');
