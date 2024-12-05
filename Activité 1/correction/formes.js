// on crée la classe parente Forme, qui prend les paramètres d'origine.
// Elle a trois variables privées :
// - l'id, qui est à null par défaut.
// - le périmètre, qui est à null par défaut.
// - l'aire, qui a aussi des valeurs par défaut.
class Forme {
  id; // permet de différencier les éléments entre eux. Il est PUBLIC, tout le monde peut y accéder.
  #perimetre = 1; // donne la largeur de la bordure. Il est PRIVÉ, les enfants ne peuvent pas y accéder.
  _aire = {"width": 100, "height": 400, "background": "chartreuse"}; // donne les éléments du polygone.Il est PROTÉGÉ, pour que les enfants puissent y accéder.

  // Lors de l'initialisation de la classe, on crée un élément visible sur la page.
  constructor(width, height, background) {
    // On verifie si on nous a donné des paramètres, sinon on garde ceux par défaut.
    if (width) {
      this._aire.width = width;
    }
    if(height){
      this._aire["height"] = height;
    }
    if (background) {
      this._aire["background"] = background;
    }

    this.id = idAleatoire(0,1000000000000000000); // on donne un id aléatoire.

    // On publie la forme sur la page, avec les propriétés choisies.
    let divMain = document.getElementById('main');
    divMain.innerHTML += '<div id="'+this.id+'" style="width:'+this._aire.width+'px; height:'+this._aire.height+'px; background-color:'+this._aire.background+'; border:'+this.#perimetre+'px solid black;"></div>';
  }

  // Permet de récupérer la couleur
  get couleur() {
    return "La couleur est " + this._aire['background'];
  }
  // change la couleur de la forme
  set couleur(nouvelleCouleur){
    this._aire.background = nouvelleCouleur;
    let formeAColorier = document.getElementById(this.id);
    formeAColorier.style.backgroundColor = nouvelleCouleur;
  }

  // Permet de récupérer la largeur.
  get largeur() {
    return this._aire.width;
  }

  // Change la largeur de la forme
  set largeur(nouvelleLargeur) {
    this._aire.width = nouvelleLargeur;
    let formeAModifier = document.getElementById(this.id);
    formeAModifier.style.width = nouvelleLargeur + 'px';
  }

}


// Une classe enfant qui permet de faire des carrés.
class Carre extends Forme {
  constructor(cote, background) {
    super(cote, cote, background);
  }

  // Ici on demande de nous renvoyer la largeur et la hauteur, qui sont les mêmes.
  get largeur() {
    return super.largeur + ', ' + this._aire.height;
  }

  // On modifie la largeur en faisant appel au parent,
  // puis on modifie la hauteur, ce que le parent ne fait pas.
  set largeur(nouveauCote) {
    super.largeur = nouveauCote;

    this._aire.height = nouveauCote;
    var rond = document.getElementById(this.id);
    rond.style.height = nouveauCote + 'px';
  }

}


// Une classe enfant qui permet de faire des ronds.
class Rond extends Carre {
  #radius = 100;

  constructor(diametre,background) {
    super(diametre, background); // Appelle le parent pour créer une forme
    var rond = document.getElementById(this.id); // récupère l'id pour lui appliquer un filtre supplémentaire
    rond.style.borderRadius = this.#radius+'%'; // applique le filtre.
  }
}





// Petite fonction qui donne un chiffre aléatoire entre deux valeurs.
function idAleatoire(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
