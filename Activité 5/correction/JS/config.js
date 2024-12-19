/**
 * Permet de définir la position de la zone de toasts sur la page
 *
 * @const {string} position Position de la zone de toasts
 * 
 * Valeurs possibles :
 * - top-right
 * - top-left
 * - bottom-right
 * - bottom-left
 * 
 * @default "top-left"
 */
export const position = "bottom-right";

/**
 * Permet de définir la durée de vie des toasts
 *
 * @const {integer} toastDuration Duree de vie des toasts en millième de seconde
 * 
 * Si vous voulez désactiver la durée du vie d'un toast, mettez la valeur à 0.
 * 
 * @default 3000 millisecondes (3 secondes)
 */
export const toastDuration = "3s";

// Couleurs de fond des toasts
export const ErrorBackgroundColor = "#ff9898";
export const WarningBackgroundColor = "#ffb300";
export const InfoBackgroundColor = "#78dfff";
export const SuccessBackgroundColor = "chartreuse";

// Titres des toasts
export const ErrorTitle = "Erreur !";
export const WarningTitle = "Attention !";
export const InfoTitle = "Info";
export const SuccessTitle = "Succès !";