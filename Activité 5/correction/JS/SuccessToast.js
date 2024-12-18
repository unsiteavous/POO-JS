import { SuccessBackgroundColor, SuccessTitle } from "./config.js";
import Toast from "./Toast.js";
import zoneDeToasts from "./ZoneDeToasts.js";

export default class SuccessToast extends Toast {
  constructor(message) {
    super(message);
    this._animationEntree = "animationEntreeSuccess";
        zoneDeToasts.addToast(this);
  }

  miseEnForme(){ 
    super.miseEnForme(SuccessBackgroundColor,'successIcone', SuccessTitle,this._animationEntree);
    const effet = document.createElement('span');
    effet.classList.add('successEffect');
    this._toast.append(effet);
  }

}