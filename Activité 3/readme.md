# Activité 3
On vous demande de développer un jeu de combat. Chaque personnage pourra perdre ou gagner de la vie durant la partie.

Vous avez donc choisi de construire un objet **barre de vie**, que vous pourrez réutiliser pour chaque personnage. Ce petit objet gèrera le visuel sur la carte du personnage.

## Cahier des charges
- par défaut, la vie est à 100, sauf si on lui donne une valeur différente lors de la construction de l'objet.
- la couleur de la barre change en fonction de la vie :
  
    |points de vie | couleur |
    |--|--|
    |1 à 30 | rouge |
    |31 à 60 | orange |
    |61 à 100 | vert |

- chaque barre de vie a un id unique, qui permet de la retrouver.
- une méthode `gagnerVie(vie)` permet d'ajouter des points de vie à la vie existante. On ne peut pas dépasser 100.
- une méthode `perdreVie(vie)` permet de retirer des points de vie à la vie existante. On ne peut pas dépasser 0.
- Si la vie passe à zéro, on fait appel à une autre méthode, `mort()`, qui déclenche la mort du personnage, et affiche dans la barre de vie "tu es mort".

## Déroulé
Si vous avez envie de travailler en autonomie, essayez de ne pas suivre les étapes ci-dessous. Elles sont là pour vous guider, mais le but est que petit à petit, vous n'ayez plus besoin d'être guidés, et que vous trouviez par vous-même la suite d'étapes à réaliser. 

1. Trouvez dans le cahier des charges les propriétés, les méthodes propres à la barre de vie. Rappelez-vous : une action, une méthode. si vous avez du code qui se répète à deux endroits, c'est qu'on peut créer une méthode qui fait ce code une fois et qu'on appelle à deux endroits.
2. réalisez le constructeur de votre classe.
3. réalisez la méthode qui donne vie à notre barre de vie dans le HTML.
4. Réalisez les méthodes qui ajoutent et enlèvent de la vie à la propriété.
5. Réalisez une méthode qui modifie votre barre HTML, et qui sera appelée dans les deux méthodes précédentes.
6. Créez la méthode `mort`, qui sera appelée dans la méthode `perdreVie`.

## Ajout supplémentaires
- Créez une méthode `idAleatoire()` qui permet de ne plus donner l'id en paramètre, mais de générer un id unique et aléatoire.
- mettez toutes les propriétés en privé et ajoutez des getters et des setters.
- créez également des getters qui permettent de récupérer les éléments HTML de la barre, pour pouvoir les appeler facilement dans le reste de votre code. Modifiez-le en conséquence.
- passez votre code en `type=module`. Je vous laisse chercher, on aura un cours dessus :)

