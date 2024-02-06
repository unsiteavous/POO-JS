window.addEventListener("DOMContentLoaded", setup);

function setup(){
  // instanciation d'un objet logement de type "maison" grâce à l'opérateur "new"
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/new
  let logement = new Logement("maison");
  console.log(logement.getType());

  // changement de la propriété type du logement
  logement.setType("appartement");
  console.log(logement.getType());

  // instanciation d'un objet appartement avec la propriété étage = 3
  let appartement = new Appartement(3);
  console.log(appartement.getType() + " - " + appartement.getEtage());
}



// CLASSE : modèle pour un objet dans le code, qui permet de construire plusieurs objets du même type (appelés instances de la même classe) 
class Logement {
  // dièze = c'est une variable privée
  #type;

  // CONSTRUCTEUR : est appelé quand on crée une nouvelle instance de cette classe avec le mot clé "new" 
  constructor(type){
    // Le mot clé "this" fait référence à la nouvelle instance, et utilise la notation dot pour attribuer la valeur reçue (type) à la clé correspondante (this.#type)
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this
    this.setType(type);
  }

  // GET : méthode qui permet d'accèder à la valeur de la propriété depuis l'extérieur de l'objet
  getType(){
    return this.#type;
  }

  // SET : méthode qui permet de changer la valeur de la propriété depuis l'extérieur de l'objet
  setType(type){
    this.#type = type;
  }

}

// HERITAGE : l'appartement hérite des mêmes propriétés qu'un logement, tout en ayant ses spécificités (avoir un étage par exemple)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/extends
class Appartement extends Logement {
  #etage;

  constructor(etage){
    // Pour que le constructeur du parent logement soit appelé, on utilise le mot clef "super"
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/super
    super("appartement");
    this.setEtage(etage);
  }

  getEtage(){
    return this.#etage;
  }

  setEtage(etage){
    this.#etage = etage;
  }

}
