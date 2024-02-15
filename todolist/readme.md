# TODO LISTE
Exercice pour comprendre et pratiquer la POO. 
Nous avons ici deux objets, l'un facile à saisir, la Tache. Elle sera répétée, a des propriétés et des méthodes propres, il est simple de comprendre pourquoi la programmation orientée objet est intéressante ici.
Le second objet est la todoliste elle-même. Bien que cet objet soit unique, il va avoir des méthodes qu'il est intéressant de regrouper.
Il est en effet plus simple de lire :
```js
let listeTaches = new Todoliste();
let nouvelleTache = new Tache();

listeTache.ajouterNouvelleTache(nouvelleTache);

ListeTache.filtrerParDate():

ListeTache.supprimerTache(ancienneTache);
// ...
```
Que la même chose avec des fonctions : 
```js
let listeTache = [];
let nouvelleTache = new Tache();

listeTache = ajouterNouvelleTache(listeTache, nouvelleTache);

listeTache = filtrerParDate(listeTache):

listeTache = supprimerTache(ListeTache, ancienneTache);
// ...
```
## Propreté du code
La programmation orientée objet a son vocabulaire propre, et depuis EcmaScript 6, utilise les mêmes mots-clefs que les autres langages (enfin !). On va donc créer des `class`, qui seront `import` dans notre fichier de script central.

Il est très important de faire une seule classe par fichier, pour simplifier la lecture, et l'utilisation des fichiers.
chaque fichier de classe sera nommé avec le nom de la classe, et commencera donc ainsi : 
```js
export default class Tache {
  // Propriétés

  constructor( /**paramètres **/){
    // Code
  }

  // Méthodes
}
```
Dans notre fichier HTML, nous devrons ajouter un nouvel attribut à notre balise script : le `type="module"`.

Enfin, dans le fichier de script principal, nous devrons appeler (`import`) les différentes classes pour les faire fonctionner :

```js
import Tache from "./classes/Tache.js";

// suite du code procédural.
```

## Particularités du `type="module"`
[Cours MDN ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules)
Utiliser ce type d'attribut permet d'éviter d'avoir plein de balises scripts dans notre HTML, qu'il faut bien mettre dans l'ordre (penser à appeler les classes avant le fichier de script procédural, penser à appeler la classe Tache avant la classe Todolist, car cette dernière en aura besoin...) 
Dans notre cas, il serait tout à fait possible d'appeler les 3 fichiers dans le HTML, et d'enlever tous les `import` et `export`, car avec deux classes et un fichier, on s'y retrouve encore.

Mais dans le cas où il y a des dizaines de classes, plusieurs fichiers de scripts procéduraux, vous imaginez la liste d'appels à des scripts qu'il faudrait faire ? 

### `Defer` et `use script` facultatifs
Pour éviter cela, on va appeler qu'un seul script, principal, qui **importera** ensuite les autres ressources. Premier avantage de ce fonctionnement en module, un seul appel dans le HTML, on gagne en clarté. Ensuite, par défaut, les modules utilisent le *mode strict*, ce qui évite quelques erreurs. Avec cela, plus besoin d'ajouter l'attribut *defer*, un module est par défaut chargé en différé !

### Courte portée 
Comme son nom l'indique, le fonctionnement en module n'est pas global : les fichiers importés n'auront une portée que dans le fichier qui les appelle. Si vous avez deux fichiers de scripts procéduraux, l'un avec un import, l'autre non, seul celui qui importe pourra utiliser le code importé, par l'autre. Logique.

Dans nos fichiers de classes, on utilise le mot clef `default`, qui permet de dire lors de l'import que ce sera le seul élément de notre fichier qui sera importé. D'où l'importance de ne faire qu'une classe par fichier !

### Eviter le `onclick`
Il faut bien avoir des exceptions (la langue française n'est pas la seule à avoir ce privilège, javascript est très bon en la matière ^^).
Lorsqu'on appelle un script dans le fichier HTML avec l'attribut `type="module"`, les appels directs du HTML vers le JS ne fonctionnent plus. Les onclick sur nos boutons n'appelleront plus rien... Du fait de la courte portée expliquée ci-dessus.

Autrement dit, ce code HTML : 
```html
<script src="script.js" type="module"></script>
<button onclick="helloWorld()">test</button>
```
Avec ce JS :
```js
function helloWorld(){
  console.log('Hello world !');
}
```

Le bouton `test`  vous dira que la fonction `helloWorld()` n'existe pas.
Il existe toutefois une parade à cela. On peut dire à la fenêtre que notre fonction existe, en ajoutant dans notre fichier de script cette ligne :

```js
window.helloWorld = helloWorld;
```
De cette manière, la fenêtre connait la fonction, et la portée devient globale. Si notre fonction prend des paramètres, cela n'est pas un problème. Une fois que window connait le nom de notre fonction, elle sait tout d'elle, notamment si elle a besoin de paramètres.

Dans certains cas cela pourra nous être utile, mais comme nous avons les `addEventListeners`, bien souvent nous pourrons nous en passer.

## Exercice 
Maintenant que vous connaissez tout des modules et de la POO, passons au code !
Le HTML vous propose tous les éléments graphiques nécessaires. Les nouvelles tâches que vous créerez devront avoir le même code, copiez-le.
Le CSS est également prêt à l'emploi, pas besoin de rajouter quoi que ce soit.

Il ne vous reste plus qu'à créer les deux classes, et le fichier de script !
Ouvrez-les, vous serez guidés. Commencez par construire la classe Tache, puis la classe Todoliste, puis le script.