# Activité 1

### A) Création de la classe parente
1. Créez une classe abstraite, parente, `Forme`. 
2. Attribuez-lui les propriétés qu'on retrouvera dans toutes les formes.
3. Créez une méthode `constructor`, qui va permettre de créer la forme au démarrage.
4. Créez une méthode `apparaitreSurLaPage`, qui permet d'ajouter l'élément HTML dans notre page.
5. Créez une méthode `miseEnForme`, qui permet de donner consistance à notre forme (selon les propriétés données).
6. Modifiez le constructeur, pour appeler les deux méthodes précédentes.

### B) Création de la classe rectangle
1. Faites une classe Rectangle, qui hérite de la classe Forme.
2. Attribuez-lui ce qui la concerne elle, de nouveau.
3. Appelez le construteur en passant les paramètres nécessaire pour construire un rectangle, et dedans, faites référence au parent, pour construire votre forme.
4. Modifiez la méthode `miseEnForme` si besoin... 
   
### C) Création de la classe carré
Recommencez l'étape précédente, mais en modifiant ce qu'il faut pour créer un carré. On ne devrait plus avoir à donner deux côtés, puisque dans un carré, tous les côtés sont égaux.

### D) Création de la classe rond
On a la chance, en dev, d'avoir le border-radius... 😉
Créez une classe qui hérite de carré, puisqu'un rond, c'est finalement un carré avec les bords arrondis... 

### E) Création d'une fonction IdAléatoire
1. Pour nous éviter d'avoir à choisir nous-même l'ID de notre élément, créez une fonction qui définit un ID aléatoirement.
Elle retournera un ID qui n'existe pas déjà. À vous de choisir la meilleure solution pour connaître les ID déjà créés. 

2. Vous appelerez ensuite cette fonction dans le constructeur de la classe adéquate, pour que toutes les formes en bénéficient, et modifierez les classes en fonction. 

3. Maintenant que vous avez fait cette fonction comme un élément externe à nos classes, revenons là-dessus. Finalement y a-t-il une raison d'appeler cette fonction hors de nos classes ? non. Transformez cette fonction en méthode de la classe Forme.

### F) Ajout des getters et des setters
Les **getters** et les **setters** sont des fonction, comme le **constructeur**, qui sont particuliers : 
- Ils permettent de venir lire ou modifier des propriétés qui sont normalement inaccessibles depuis l'extérieur d'un objet : les propriétés privées ou protégées. 
- Grâce à eux, on peut surveiller ce qui se passe lors de la lecture ou de l'écriture d'une propriété : par exemple, on peut mettre en forme la propriété avant de la lire, ou on peut faire un traitement particulier avant l'écriture.
- Cela permet de s'assurer que les propriétés enregistrées correspondent bien à ce qu'on attend, et que la lecture affiche bien ce qu'on veut.

Ajoutez des getters et des setters, pour chaque classe. Cela nous permettra entre autre de pouvoir modifier les propriétés des formes déjà existantes, par exemple changer la longueur d'un côté. Faites en sorte que cela modifie aussi la forme dans le HTML.

### G) Création de la forme Triangle
Un peu plus complexe 😉 

