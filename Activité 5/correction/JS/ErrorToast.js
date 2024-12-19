import Toast from "./Toast.js";
import zoneDeToasts from "./ZoneDeToasts.js";

export default class ErrorToast extends Toast {

  constructor(message) {
    super(message);
    this._animationEntree = "animationEntreeError";
    zoneDeToasts.addToast(this);
  }

  miseEnForme() {
    super.miseEnForme("#ff9898",'errorIcone', "Erreur !", this._animationEntree);
  }
}