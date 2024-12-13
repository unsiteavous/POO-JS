import ErrorToast from "./JS/ErrorToast.js";
import SuccessToast from "./JS/SuccessToast.js";
import InfoToast from "./JS/InfoToast.js";
import WarningToast from "./JS/WarningToast.js";

SuccessToast.creationZoneDeToasts();


let toast = new SuccessToast("Tu as réussi ton premier toast !");
let toast1 = new ErrorToast("tu n'as pas réussi"); 
let toast2 = new InfoToast('Ceci est un toast d\'information');
let toast3 = new WarningToast('Quelque chose s\'est mal passé');