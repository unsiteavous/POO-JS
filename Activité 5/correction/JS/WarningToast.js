import Toast from "./Toast.js";
import zoneDeToasts from "./ZoneDeToasts.js";

export default class WarningToast extends Toast {
  constructor(message) {
    super(message);
    this._animationEntree = "animationEntreeWarning";
        zoneDeToasts.addToast(this);
  }

  miseEnForme() {
    super.miseEnForme("#ffb300", "warningIcone", "Attention !", this._animationEntree);
  }

}