// on crée la classe parente Forme, qui prend les paramètres d'origine.
// Elle a deux variables privées :
// - le périmètre, qui est à null par défaut
// - l'aire, qui a aussi des valeurs par défaut.
class Forme {
  _id;
  _perimetre;
  _aire = {"width": 100, "height": 400, "background": "chartreuse"};

  // Lors de l'initialisation de la classe, on crée un élément visible sur la page.
  constructor(width, height, background) {
    if (width) {
      this._aire["width"] = width;
    }
    if(height){
      this._aire["height"] = height;
    }
    if (background) {
      this._aire["background"] = background;
    }

    this._id = idAleatoire(0,1000000000000000000);

    let divMain = document.getElementById('main');
    divMain.innerHTML += '<div id="'+this._id+'" style="width:'+this._aire['width']+'px; height:'+this._aire['height']+'px; background-color:'+this._aire['background']+';"></div>';
  }

}


class Rond extends Forme {
  _radius = 100;

  constructor(diametre,background) {
    super(diametre, diametre, background);
    var rond = document.getElementById(this._id);
    rond.style.borderRadius = this._radius+'%';
  }
}







function idAleatoire(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
