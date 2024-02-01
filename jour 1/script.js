class forme {
  // initialisation :
  cote;
  aire;
  couleur = "black";

  constructor(cote, couleur){
    this.cote = cote;
    this.couleur = couleur;
  }

  calculAire(cote){
    this.aire = 'et ben non';
  }

}


let premierObjetForme = new forme(20,"orange");
console.log(premierObjetForme)

let secondObjetForme = new forme(50,"blue");

console.log(secondObjetForme)



// ENFANT
class carre extends forme {

  constructor(cote,couleur){
    // j'appelle le parent pour lui demander de faire son travail
    super(cote,couleur);
    // J'appelle les méthodes de l'enfant lui-même
    super.calculAire(this.cote);
  }

  calculAire(cote){
    this.aire = cote*cote;
  }



}

let premierCarre = new carre(10,"yellow");

console.log(premierCarre)


// PETIT ENFANT
class cercle extends carre {
  radius = 100;

  constructor(rayon,couleur){
    let diametre = rayon*2;
    super(diametre, couleur);

  }
}

let premierCercle = new cercle(10,"green");











