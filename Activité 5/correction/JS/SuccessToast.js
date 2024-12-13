import Toast from "./Toast.js";

export default class SuccessToast extends Toast {
  constructor(message) {
    super(message);
    this._animationEntree = "animationEntreeSuccess";
    this.miseEnForme();
  }

  miseEnForme() {
    super.miseEnForme();
    const effet = document.createElement('span');
    effet.classList.add('successEffect');
    this._toast.append(effet);
    this._toast.style.backgroundColor = "chartreuse";
    this._icone.classList.add('successIcone');
    this._h4.textContent = "Succès !";
    this._toast.classList.add(this._animationEntree);

  }

}