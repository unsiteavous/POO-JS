# Découverte de la programmation Orientée objet
L'exercice va nous permettre de nous familiariser avec la notion d'objet.
Comme dans le monde réel, dont la programmation s'inspire toujours, nous avons parfois besoin de répéter la même chose, de manière quasi identique. Prenons par exemple un tableau, stockant une liste d'animaux dans un zoo, ainsi que leurs nourriture associée. Si nous voulions afficher des cartes sur une page, représentant chaque animal, avec ses caractéristiques, nous ferions une boucle, qui répèterait toujours le même procédé, pour créer les mêmes cartes... les mêmes objets.

Dans cet exemple, chaque carte est un objet, et nous créons autant d'objets que de lignes dans notre tableau. La boucle est comme une usine, qui crée le nombre d'objets demandés.

La Programmation Orientée Objet (POO) nous permet d'y voir plus clair, avec cela.
Nous allons avoir un fichier qui va définir **les plans** de notre objet, ce qu'on appelle **une classe**.

Puis, lorsque notre boucle aura besoin de créer les objets, nous **instancierons** ce plan, avec le mot `new`, pour dire qu'on veut créer un nouvel objet selon les plans définis.

> Une usine, des plans, des objets. 

## Héritage
Mais ça ne s'arrête pas là ! encore une fois comme dans le monde réel, nous allons utiliser le principe d'héritage, pour construire des objets avec des liens entre eux.

> Par exemple, chaque animal du zoo est avant tout un animal, avant d'être un lion, un zèbre ou une chave-souris. 

Nous pouvons donc faire un plan de l'objet animal, une classe, qui définit **en général** toutes les caractéristiques communes que l'on retrouve chez tous les animaux. 
> Un cœur, du sang, un cerveau, ... 

Mais il y a des choses qui différencient quand même ces animaux. La classe Animal ne peut pas définir correctement tous les animaux. 

Nous sommes donc obligés de créer des classes **enfants**, qui vont hériter des propriétés de la classe **parente**, et vont pouvoir préciser, compléter, redéfinir ses propriétés, pour coller plus précisément à la réalité de l'objet.

> Par exemple, la classe Lion ajoute à la classe Animal, dont elle hérite : griffes, crocs, et redéfinirait la propriété "régime alimentaire" à "carnassier", tandis que la classe Zèbre, qui hérite aussi de la classe Animal, ajouterait sabot, molaires, et redéfinirait la propriété "régime alimentaire" à "herbivore". 

En fait, on recrée l'arbre de classification des espèces ! 
![Arbre de classification](https://www.aquaportail.com/pictures2208/espece-type-calssification-animale.jpg)

## Activité Découverte

1. Créez l'arbre de classification en définissant les héritages et les particularités pour l'univers immobilier : maison, appartement, tiny House, yourte, château, ISS, ...  

2. De la même manière, créez l'arbre de classification pour l'univers des desserts, **puis** posez-vous ces questions :
   - Le sans gluten est-il une propriété d'un enfant ou du parent ?
   - Est-ce qu'avec votre arbre, je peux concevoir une mousse au chocolat ? une meringue au citron ? une tarte aux noix ? Un sorbet à la framboise ? Si non, améliorez votre arbre.  

3. Enfin, faites de même pour les moyens de transport. Puis posez-vous les questions suivantes :
   - Dans votre arbre, pouvez-vous voir apparaître : le monocycle ? le catamaran ? le dromadaire ? la mongolfière ? le parapente ? la fusée ? le train ? le canoë ?
   - Quelles sont finalement les propriétés communes à tous les moyens de transports ?
   - y a-t-il des propriété identiques qu'on retrouve dans des branches très différentes ?

