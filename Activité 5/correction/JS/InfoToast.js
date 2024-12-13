import Toast from "./Toast.js";

export default class InfoToast extends Toast {
  constructor(message){
    super(message);
    this._animationEntree = "animationEntreeInfo";
    this.miseEnForme();
  }

  miseEnForme(){
    super.miseEnForme();
    this._toast.style.backgroundColor = "#78dfff";
    this._icone.classList.add('infoIcone');
    this._h4.textContent = "Info";
    this._toast.classList.add(this._animationEntree);
  }
}