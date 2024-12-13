import Toast from "./Toast.js";

export default class WarningToast extends Toast {
  constructor(message) {
    super(message);
    this._animationEntree = "animationEntreeWarning";
    this.miseEnForme();
  }

  miseEnForme() {
    super.miseEnForme();
    this._toast.style.backgroundColor = "#ffb300";
    this._icone.classList.add('warningIcone');
    this._h4.textContent = "Attention !";
    this._toast.classList.add(this._animationEntree);

  }

}