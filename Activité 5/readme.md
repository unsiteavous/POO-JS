# Toasts en POO
Notre objectif va être de faire un petit élément HTML qui nous servira partout ensuite : le toast ! (en plus c'est bientôt les fêtes, on va en manger pleins, des toasts !)

Les toasts, [c'est ça](https://github.com/uzochukwueddie/react-toast).

Nous on va se faire les nôtres, et pourquoi pas comme une librairie qu'on pourra ensuite importer dans nos différents projets.

## Etapes
1. En groupe, Créer le cahier des charges de nos toasts.
    - Quels sont les éléments permanents (padding, ...) ?
    - Quels sont les éléments personnalisables (message, ...) ?
    - Quels sont  les éléments propres à un types de toast (couleur, ...) ?

2. En groupe, Créer avec JS l'élément HTML dans lequel vont apparaître nos toasts.

3. En groupe, Créer une classe abstraite, générale, qui va permettre de créer l'ossature générale d'un toast.

4. En groupe, Créer une première classe enfant pour les toasts `success`. Pensez à importer la classe parente pour pouvoir l'utiliser.

5. Seul·e, Créer d'autres classes enfant pour les toasts `error`, `info`, `warning`.
   
6. Constater un problème : lorsqu'on crée 7 toasts en même temps, ils se rapetissent pour rentrer dans la place allouée à la zone de toasts. Créer une classe ZoneDeToast qui va gérer le nombre de toasts en même temps, et mettre en attente les toasts en trop pour les faire apparaître plus tard. Ces méthodes seront statiques.

7. Maintenant, pour coller à notre cahier des charges, la zone de toasts doit pouvoir être modifiée, pour être en haut ou en bas, à droite ou à gauche. Créer un fichier `config.js` dans lequel il y n'y aura que des variables exportées. Faire une variable `position` qui pourra prendre 4 valeurs, avec une par défaut. 

8. Dans la classe ZoneDeToasts, écouter la variable position pour ajouter les bonnes classes CSS à la div. Créer les classes CSS adéquates.

9.  Vous constatez que les effets ne sont pas bons pour toutes les positions. droites et gauches n'ont pas les mêmes côtés d'entrée et de sortie. Créer un second fichier d'animation, pour les animations par la droite.
 
10. Pour éviter de charger des fichiers qui ne servent à rien dans le HTML, créer une méthode dans la classe ZoneDeToasts qui permettra de charger la bonne fiche de styles pour les animations.

11. Puisqu'on charge cette feuille de style dynamiquement, faire la même chose pour la feuille de style générale également. Ainsi, la classe ZoneDeToasts embarque à bord tout le contenu dont elle a besoin, sans dépendre de plusieurs lignes à marquer dans le HTML.

12. Si vous essayez de créer un nouveau toast depuis la console du navigateur, vous aurez une erreur : la classe SuccessToast n'existe pas. Et oui, c'est le problème du `type="module"` : le code n'est pas accessible depuis l'extérieur du module !  
Il existe cependant une solution à ce problème. Faire une recherche pour trouver un moyen de rendre accessibles les 4 classes de toasts en dehors du module, puis ajouter ce code à la classe ZoneDeToasts. De cette manière, lors de la création de la zone de toasts, tout sera mis en place (les feuilles de style, l'accessibilité des toasts, ...).

13. Dans tous les fichiers de toasts, on voit que dans la méthode `miseEnForme()`, les mêmes lignes apparaissent. Ce n'est pas DRY. Comment améliorer ce code pour optimiser et alléger les fichiers ?

14. Dans le fichier config, ajouter la possibilité de modifier les couleurs des toasts (backgroundColor et color), les titres, la durée d'affichage d'un toast. Modifier les classes des toasts en conséquence.

15. Paramétrer le repository pour pouvoir devenir une librairie à installer dans d'autres projets. [Aidez-vous de tuto](<créer une librairie.md>).

## Pour aller plus loin... 
16. Créer deux thèmes : clair et sombres.
17. ajouter des animations spécifiques au type de message.
18. Rendre visible la durée d'affichage du toast avec une barre de progression, avant suppression.