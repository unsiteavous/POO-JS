import ErrorToast from "./JS/ErrorToast.js";
import SuccessToast from "./JS/SuccessToast.js";
import InfoToast from "./JS/InfoToast.js";
import WarningToast from "./JS/WarningToast.js";

SuccessToast.creationZoneDeToasts();

setTimeout(() => {
  let toast = new SuccessToast("Tu as réussi ton premier toast !");
}, 1000);
setTimeout(() => {
  let toast1 = new ErrorToast("tu n'as pas réussi");
}, 2000);
setTimeout(() => {
  let toast2 = new InfoToast('Ceci est un toast d\'information');

}, 3000);
setTimeout(() => {
  let toast3 = new WarningToast('Quelque chose s\'est mal passé');

}, 4000);

