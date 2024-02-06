class Forme {
  #ID;
  #Couleur

  // construire l'objet
  constructor(ID, couleur) {
    this.ID = ID;
    this.Couleur = couleur;
    this.creerHTML();
  }
  // Getters et Setters
  get ID() {
    return this.#ID;
  }
  set ID(ID) {
    this.#ID = ID;
  }
  get Couleur() {
    return this.#Couleur;
  }
  set Couleur(couleur) {
    if (!couleur) {
      throw new Error('Il me faut une couleur');
    } else {
      this.#Couleur = couleur;
    }
  }
  // creerHTML
  creerHTML() {
    let newDiv = document.createElement('div');
    newDiv.id = this.ID;
    newDiv.style.backgroundColor = this.Couleur;
    const body = document.body;
    body.appendChild(newDiv);
  }
}

class Rectangle extends Forme {
  #longueur;
  #largeur;

  constructor(ID, couleur, longueur, largeur){
    super(ID, couleur);
    this.longueur = longueur;
    this.largeur = largeur;

    this.mettreEnForme();
  }

  get longueur(){
    return this.#longueur;
  }
  set longueur(longueur){
    this.#longueur = longueur;
  }
  get largeur(){
    return this.#largeur;
  }
  set largeur(largeur){
    this.#largeur = largeur;
  }
  mettreEnForme(){
    let carre = document.getElementById(this.ID);
    carre.style.width = this.longueur + "px";
    carre.style.height = this.largeur + "px";
  }
}
class Carre extends Rectangle {

  constructor(ID, couleur, cote){
    super(ID, couleur, cote, cote);
  }
}

class Rond extends Carre{
  #radius = 100
  constructor(ID, couleur, diametre){
    super(ID, couleur, diametre);

    this.arrondir();
  }

  arrondir(){
    let rond = document.getElementById(this.ID);
    rond.style.borderRadius = this.#radius + '%';
  }
}


// Instanciation de nos objets
let rectangle1 = new Rectangle(1, "green", 300, 50)
let carre1 = new Carre(2, "orange", 150)
let rond1 = new Rond(3, "blue", 200)