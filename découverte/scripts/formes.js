// on crée la classe parente Forme, qui prend les paramètres d'origine.
// Elle a deux variables privées :
// - le périmètre, qui est à null par défaut
// - l'aire, qui a aussi des valeurs par défaut.
class Forme {
  #id; // permet de différencier les éléments entre eux
  #perimetre = 1; // donne la largeur de la bordure
  #aire = {"width": 0, "height": 0, "background": "chartreuse"}; // donne les éléments du polygone

  // Lors de l'initialisation de la classe, on crée un élément visible sur la page.
  constructor(width, height, background) {

    this.aire = {width:width, height:height, background:background};

    this.id = 'nouveau';

    // On publie la forme sur la page, avec les propriétés choisies.
    let divMain = document.getElementById('main');
    divMain.innerHTML += `<div id="${this.id}" style="width:${this.aire.width}px; height:${this.aire.height}px; background-color:${this.aire.background}; border:${this.perimetre}px solid black;"></div>`;
  }

  get id(){
    return this.#id;
  }

  set id(id){
    if (id !== "nouveau") {
      this.#id = id;
    }else {
      this.#id = this.idAleatoire(0,1000000000000000000); // on donne un id aléatoire.
    }
  }
  get aire(){
    return this.#aire;
  }
  set aire(infos){
        // On verifie si on nous a donné des paramètres, sinon on garde ceux par défaut.
        if (infos.width) {
          this.#aire["width"] = infos.width;
          // On peut aussi écrire la meme chose ainsi :
          this.#aire.width = infos.width
        }
        if(infos.height){
          this.#aire["height"] = infos.height;
        }
        if (infos.background) {
          this.#aire["background"] = infos.background;
        }
  }

  // Permet de récupérer la couleur
  get couleur() {
    return "La couleur est " + this.#aire['background'];
  }
  // change la couleur de la forme
  set couleur(nouvelleCouleur){
    this.#aire.background = nouvelleCouleur;
    let formeAColorier = document.getElementById(this.#id);
    formeAColorier.style.backgroundColor = nouvelleCouleur;
  }

  // Permet de récupérer la largeur.
  get largeur() {
    return this.#aire['width'];
  }

  // Change la largeur de la forme
  set largeur(nouvelleLargeur) {
    this.#aire.width = nouvelleLargeur;
    let formeAModifier = document.getElementById(this.#id);
    formeAModifier.style.width = nouvelleLargeur + 'px';
  }

  get perimetre(){
    return this.#perimetre;
  }
  
  set perimetre(nouveauPerimetre){
    this.#perimetre = nouveauPerimetre;
  }

  // Petite fonction qui donne un chiffre aléatoire entre deux valeurs.
  idAleatoire(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

}


// Une classe enfant qui permet de faire des carrés.
class Carre extends Forme {
  constructor(cote, background) {
    super(cote, cote, background);
  }

  // Ici on demande de nous renvoyer la largeur et la hauteur, qui sont les mêmes.
  get largeur() {
    return super.largeur + ', ' + this.aire['height'];
  }

  // On modifie la largeur en faisant appel au parent,
  // puis on modifie la hauteur, ce que le parent ne fait pas.
  set largeur(nouveauCote) {
    super.largeur = nouveauCote;

    this.aire['height'] = nouveauCote;
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






let carre1 = new Carre(100,"green");
let rond1 = new Rond(100,"blue");

console.log(carre1);
console.log(rond1);