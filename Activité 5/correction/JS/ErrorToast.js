import Toast from "./Toast.js";

export default class ErrorToast extends Toast {

  constructor(message) {
    super(message);
    this._animationEntree = "animationEntreeError";
    this.miseEnForme();
  }

  miseEnForme() {
    super.miseEnForme();
    this._toast.style.backgroundColor = "#ff9898";
    this._icone.classList.add('errorIcone');
    this._h4.textContent = "Erreur !";
    this._toast.classList.add(this._animationEntree);

  }
}