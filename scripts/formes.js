// on crée la classe parente Forme, qui prend les paramètres d'origine.
// Elle a deux variables privées :
// - le périmètre, qui est à null par défaut
// - l'aire, qui a aussi des valeurs par défaut.
class Forme {
  _id; // permet de différencier les éléments entre eux
  _perimetre = 1; // donne la largeur de la bordure
  _aire = {"width": 100, "height": 400, "background": "chartreuse"}; // donne les éléments du polygone

  // Lors de l'initialisation de la classe, on crée un élément visible sur la page.
  constructor(width, height, background) {
    // On verifie si on nous a donné des paramètres, sinon on garde ceux par défaut.
    if (width) {
      this._aire["width"] = width;
    }
    if(height){
      this._aire["height"] = height;
    }
    if (background) {
      this._aire["background"] = background;
    }

    this._id = this.idAleatoire(0,1000000000000000000); // on donne un id aléatoire.

    // On publie la forme sur la page, avec les propriétés choisies.
    let divMain = document.getElementById('main');
    divMain.innerHTML += '<div id="'+this._id+'" style="width:'+this._aire['width']+'px; height:'+this._aire['height']+'px; background-color:'+this._aire['background']+'; border:'+this._perimetre+'px solid black;"></div>';
  }

  // Permet de récupérer la couleur
  get couleur() {
    return "La couleur est " + this._aire['background'];
  }
  // change la couleur de la forme
  set couleur(nouvelle_couleur){
    this._aire['background'] = nouvelle_couleur;
    let formeAColorier = document.getElementById(this._id);
    formeAColorier.style.backgroundColor = nouvelle_couleur;
  }

  // Permet de récupérer la largeur.
  get largeur() {
    return this._aire['width'];
  }

  // Change la largeur de la forme
  set largeur(nouvelle_largeur) {
    this._aire['width'] = nouvelle_largeur;
    let formeAModifier = document.getElementById(this._id);
    formeAModifier.style.width = nouvelle_largeur + 'px';
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
    return super.largeur + ', ' + this._aire['height'];
  }

  // On modifie la largeur en faisant appel au parent,
  // puis on modifie la hauteur, ce que le parent ne fait pas.
  set largeur(nouveau_cote) {
    super.largeur = nouveau_cote;

    this._aire['height'] = nouveau_cote;
    var rond = document.getElementById(this._id);
    rond.style.height = nouveau_cote + 'px';
  }

}


// Une classe enfant qui permet de faire des ronds.
class Rond extends Carre {
  _radius = 100;

  constructor(diametre,background) {
    super(diametre, background); // Appelle le parent pour créer une forme
    var rond = document.getElementById(this._id); // récupère l'id pour lui appliquer un filtre supplémentaire
    rond.style.borderRadius = this._radius+'%'; // applique le filtre.
  }
}





// Petite fonction qui donne un chiffre aléatoire entre deux valeurs.
function idAleatoire(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





let forme = new Forme(100,100,"blue");
