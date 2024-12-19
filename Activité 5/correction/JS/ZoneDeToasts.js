import { position } from "./config.js";
import ErrorToast from "./ErrorToast.js";
import InfoToast from "./InfoToast.js";
import SuccessToast from "./SuccessToast.js";
import WarningToast from "./WarningToast.js";

export default class zoneDeToasts {

  static init() {
    zoneDeToasts.loadAnimationStyleSheet();
    zoneDeToasts.loadStyleSheet();
    zoneDeToasts.creationZoneDeToasts();
    zoneDeToasts.loadToastsFromModule();
  }
  
  static creationZoneDeToasts() {
    const zoneDeToasts = document.createElement('div');
    zoneDeToasts.classList.add('zoneDeToasts', position);

    zoneDeToasts.id = "zoneDeToasts";
    document.body.append(zoneDeToasts);
  }

  static loadAnimationStyleSheet() {
    let animationStyle = document.createElement("link");
    animationStyle.rel = "stylesheet";
    if (position == "bottom-right" || position == "top-right") {
      animationStyle.href = "./css/animations-right.css";
    } else {
      animationStyle.href = "./css/animations-left.css";
    }
    document.head.appendChild(animationStyle);
  }

  static loadStyleSheet() {
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "./css/style.css";
    document.head.appendChild(style);
  }

  static addToast_recursive(toast) {
    // si nombre de toasts > 4 alors on attend et on ressaye plus tard
    if (document.getElementById('zoneDeToasts').querySelectorAll('.toast').length >= 4) {
      setTimeout(() => {
        zoneDeToasts.addToast_recursive(toast);
      }, 1000);
    } else {
      // sinon  afficher le nouveau toast
      toast.miseEnForme();
    }
  }

  static async addToast(toast) {
    while (document.getElementById('zoneDeToasts').querySelectorAll('.toast').length >= 4) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    toast.miseEnForme();
  }

  static loadToastsFromModule(){
    window.SuccessToast = SuccessToast;
    window.ErrorToast = ErrorToast;
    window.WarningToast = WarningToast;
    window.InfoToast = InfoToast;
  }
}