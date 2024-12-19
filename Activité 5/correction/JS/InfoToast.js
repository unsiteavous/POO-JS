import Toast from "./Toast.js";
import zoneDeToasts from "./ZoneDeToasts.js";

export default class InfoToast extends Toast {
  constructor(message){
    super(message);
    this._animationEntree = "animationEntreeInfo";
    zoneDeToasts.addToast(this);
  }

  miseEnForme(){
    super.miseEnForme("#78dfff",'infoIcone', "Info", this._animationEntree);
  }
}