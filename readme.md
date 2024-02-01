# Découverte de la Programmation Orientée Objet
Très bonnes explications [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
Très bon cours [ici](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics)

La programmation orientée objet, c'est un truc de fénéant. Heu, de développeur pardon. De développeur fénéant quoi. De tous les développeurs donc.
Le but, c'est de construire un moule (**classe**) qui va nous permettre de toujours faire le même gâteau (**instance** ou **objet**). 
À chaque fois que nous demanderons au moule de faire un nouveau gâteau, `POUF !` un nouveau gateau, identique au précédent sera créé.
Cela va nous permettre d'automatiser certaines tâches pour aller plus vite, et d'être sûrs que nous aurons à chaque fois la même chose.

Pour entrer un peu plus dans les détails, prenons un autre exemple. Ma classe est une usine de voiture. Chaque instance sera donc une voiture. À chaque fois que je demanderai à ma classe de faire une nouvelle voiture, j'aurai un clone, identique de la voiture précédente, avec les mêmes options, les mêmes couleurs, les mêmes fonctionnalités.

Mon objet voiture aura des **propriétés** (nombre de portes, puissance du moteur, nombre de places, présence d'un auto-radio, ...) et des **méthodes**, qui sont des actions que l'objet peut faire, ou qu'on peut faire à l'objet. 
par exemple :
- tourner à droite ou à gauche,
- freiner,
- accélérer,
- fermer/ouvrir la voiture,
- lui changer les pneus,
- etc.

Parmi ces *méthodes* il y en a deux, qui vont quasi toujours de pair : les **getters** et les **setters**.
Les **getters** servent à récupérer une information (get => obtenir). Aussi appelés **accesseurs**
Les **setters** permettent de modifier une information (set => placer, préparer). Aussi appelés **mutateurs**.

elles vont de pair grâce à leur nom, qui sera quasi identique :
- set Nom()
- get Nom()
En JS, on peut détacher set et get du nom de la méthode. En PHP, ils seront attachés.

## Héritage
Les classes, comme beaucoup de choses en programmation, s'inspire de la vie courante. Il y a des enfants, des parents, et donc des héritages...
Une classe parente, c'est une classe générique. Par exemple, une usine de voiture. 
Une classe enfant, qui hérite de cette classe parente, ce sera par exemple Renault, Peugeot, ... qui sont des usines de voitures, mais *plus précisément* que la classe parente : elles font tout comme la classe parente (elles héritent de toutes ses propriétés et méthodes), et en plus elles font des choses que elles seules peuvent faire (et pas la classe parente).

pour hériter d'une classe, une classe fille appelera la classe mère avec `extends`.
```js
class mere {
    // code
}

class fille extends mere {
    // code
}

```

## Appels externes
Pour créer un nouvel objet, on va utiliser le mot-clef `new`.
```js
let objet = new Classe();
```
Une fois l'objet instancié, nous allons pouvoir l'utiliser comme d'habitude, encapsulé dans une variable, en utilisant des `.` pour accéder à ses propriétés ou à ses méthodes.

Parfois, ses propriétés ou méthodes ne seront pas accessibles depuis l'extérieur de l'objet, afin de les protéger : ne pas pouvoir lire ou modifier certains éléments nous oblige à passer par les bonnes méthodes pour avoir accès à une information.

Une propriété ou une méthode pourront donc être :
- `public` : accessibles depuis l'extérieur de l'objet
- `private` : pas accessibles depuis l'extérieur de l'objet, ni depuis les enfants de cette classe en JS symbolisé par #
- `protected` : pas accessible depuis l'extérieur de l'objet, mais accessible par les enfants de cette classe
- `static` : accessible en appelant la classe, même si on a pas instancié d'objets. voir cet [exemple](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes#m%C3%A9thodes_statiques)



## Appels internes
### THIS
Nous avons vu que nous pouvions appeler les objets depuis l'extérieur. Il est bien sûr possible d'appeler les propriétés et méthodes depuis l'intérieur de l'objet, pour faire des calculs avant de renvoyer une valeur par exemple. Comme on est à l'intérieur de l'objet, on ne connait pas le nom de la variable dans laquelle on a instancié l'objet. À la place, on utilisera `this`.
```js
class utilisateur {
    prenom;
    #nom;

    get fullName() {
        // impossible de connaître le nom de l'objet instancié (gateauAuxPommes par exemple ici.)
        // Pour sélectionner l'objet, on utilise this.
        return this.prenom + " " + this.nom;
    }

    set fullName(value) {
        [this.prenom, this.nom] = value.split(" ");
    }
}

let Partick = new utilisateur();
Patrick.fullName = "Patrick Edlinger";

console.log(Patrick.fullName) // affichera Patrick Edlinger
console.log(Patrick.prenom) // affichera Patrick 
console.log(Patrick.nom) // affichera erreur : nom est private 
```


### SUPER
Lorsqu'on utilise une classe enfant, et que l'on veut appeler une méthode ou une propriété définie dans son parent, on va utiliser `super` en JS.

```js
class banque {
     #numeroEtablissement;
}

class creditCooperatif extends banque {
    #numeroCompte;

    get IBAN(){
        return super.numeroEtablissement + ' ' + this.numeroCompte;
    }

}

```

