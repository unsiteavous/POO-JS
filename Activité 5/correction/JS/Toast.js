import { toastDuration } from "./config.js";

export default class Toast {
  #zoneDeToasts;
  #message;
  _toast;
  _icone;
  _h4;
  #cross;
  #timeOut;
  _animationEntree;

  /**
   * Construction d'un toast
   *
   * @param   {[string]}  message  Message à afficher
   *
   */
  constructor(message) {
    this.#zoneDeToasts = document.getElementById('zoneDeToasts');
    this.#message = message
  }

  miseEnForme(backgroundColor, icone, h4Content, animationEntree) {
    this._toast = document.createElement('div');
    this._toast.classList.add('toast',animationEntree);
    this._toast.style.backgroundColor = backgroundColor;
    
    this._icone = document.createElement('i');
    this._icone.classList.add(icone);
    this.#cross = document.createElement('i');
    this.#cross.classList.add('close');
    
    const div = document.createElement('div');
    this._h4 = document.createElement('h4');
    this._h4.textContent = h4Content;
    const p = document.createElement('p');
    p.textContent = this.#message;

    div.append(this._h4, p);
    this._toast.append(this._icone, this.#cross, div);

    this.#zoneDeToasts.appendChild(this._toast);

    this.closeToast();
    this.deleteAfterDelay();
  }

  /**
   * Méthode de suppression d'un toast au clic et d'arrêter le timeOut
   *
   */
  closeToast() {
    this.#cross.addEventListener('click', () => {
      this.#deleteToast();
      clearTimeout(this.#timeOut);
    })
  }

  /**
   * Méthode qui permet de définir la suppression automatique du toast après un délai.
   *
   */
  deleteAfterDelay() {
    this.#timeOut = setTimeout(() => {
      this.#deleteToast();
    }, toastDuration)
  }

  /**
   * Méthode qui permet de supprimer le toast après une animation de sortie.
   */
  #deleteToast() {
    this._toast.classList.remove(this._animationEntree);
    this._toast.classList.add('animationSortie');
    setTimeout(() => {
      this.#zoneDeToasts.removeChild(this._toast)  
    }, 2000)
  }
}