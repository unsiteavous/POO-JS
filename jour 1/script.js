class forme {
  // Définition de nos propriétés
  ID
  cote;
  couleur;
  aire;

  // Constructeur de la forme :
  constructor(ID, coteDonneParLUtilisateur, couleurDonneParLUtilisateur) {
    this.cote = coteDonneParLUtilisateur;
    this.couleur = couleurDonneParLUtilisateur;
    this.ID = ID;
    // toutes les formes apparaissent sur la page, au moment où on les crée :
    this.apparaitreSurLaPage();
  }

  /**
   * Méthode qui permet de créer la div avec le bon ID sur la page.
   *
   * @return  {void}  La div est ajoutée au body.
   */
  apparaitreSurLaPage() {
    document.body.innerHTML += `<div id="${this.ID}"></div>`;
  }
}




/**
 * La classe carré permet de créer un carré, et hérite de la classe forme
 */
class carre extends forme {

  /**
   * Le constructeur du carré appelle le constructeur parent (super), puis fait la mise en forme nécessaire à un carré.
   *
   * @param   {number}  ID                                       L'id de notre forme
   * @param   {number}  coteLorsqueUtilisateurInstancieCarre     la longueur du côté donnée par l'utilisateur lors de l'instanciation
   * @param   {string}  couleurLorsqueUtilisateurInstancieCarre  La couleur choisie par l'utiliseur lors de l'instanciation
   *
   * @return  {void}                                           la modification est directement faite sur le html, on ne retourne rien.
   */
  constructor(ID, coteLorsqueUtilisateurInstancieCarre, couleurLorsqueUtilisateurInstancieCarre) {
    super(ID, coteLorsqueUtilisateurInstancieCarre, couleurLorsqueUtilisateurInstancieCarre);

    // On vient compléter la mise en forme faite par le parent
    this.miseEnForme();
  }

  // on fait la mise en forme du carré
  miseEnForme() {
    let carre = document.getElementById(this.ID);
    carre.style.backgroundColor = this.couleur;
    carre.style.width = this.cote + "px";
    carre.style.height = this.cote + "px";
  }

}

let carre1 = new carre(7, 20, "orange");
console.log(carre1);


class rond extends carre {
  constructor(ID, diametre, couleur) {
    super(ID, diametre, couleur)
    this.miseEnForme();
  }

  // On fait la mise en forme du rond EN PLUS de celle du carré.
  miseEnForme() {
    // Mise en forme du carré
    super.miseEnForme();
    // À laquelle on ajoute la mise en forme propre au cercle :
    let rond = document.getElementById(this.ID);
    rond.style.borderRadius = "100%";
  }

}

let rond1 = new rond(12, 50, "red");
console.log(rond1);
