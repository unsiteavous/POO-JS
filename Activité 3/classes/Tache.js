// On définit la classe Tache, exportable et par défaut :
// ============================================================
// Tache
// ============================================================
    
// On définit ensuite 4 propriétés privées :
// - #id : il sera construit aléatoirement
// - #titre
// - #echeance
// - #priorite : trois valeurs possibles [basse, moyenne, elevee]

// ============================================================
// CONSTRUCTEUR
// ============================================================
// Il devra récupérer les valeurs nécessaire à l'instanciation, puis appeler la méthode creerHTML.
// Lors de la récupération, il faudra mettre l'ID en dernier (paramètre optionnel), avec la valeur par défaut "à créer".
// Lorsqu'on récupérera, plus tard, les tâches depuis le localStorage, elles auront déjà leur ID. Mais si c'est une nouvelle tâche, elle n'en aura pas, il faudra alors le créer.

// ============================================================
// MÉTHODES
// ============================================================

// 1. Commencer par créer les getters et les setters.
// ID : si il est donné, on lui attribue la valeur donnée, sinon on le crée.
// titre : rien de particulier pour l'instant (plus tard, on pourra empêcher tous les caractères de code malveillant)
// échéance : il faudra un setter qui instancie la date selon Date() (voir la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
// il faudra ensuite lui faire deux getters : 
// - l'un pour afficher la date dans le HTML avec un format lisible par les humains français (voir la doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
// - l'autre qui la retourne dans le format dans lequel elle a été enregistrée.

// priorité : un setter qui appelera une méthode privée definirPriorite(priorite), et un getter normal.


// 2. constuire ensuite la méthode creerIdAleatoire, privée, qui retournera un nombre entier compris entre 0 et 1000000

// 3. construire la méthode definirPriorite, qui prendra la priorité donnée en paramètre, eten fonction de sa valeur, renverra un tableau contenant deux valeurs comme ceci :
// { classe: "basse", intitulé: "Non prioritaire" }
// la classe permettra de mettre le bon style dans le HTML, tandis que l'intitulé sera ce qui sera affiché à l'utilisateur.
// Si vous avez un doute, allez voir index.html, les trois tâches écrites en dur vous permettront de comprendre.

// 4. Construire ensuite la méthode creerHTML, qui reprendra justement le html et remplacera les textes, Id et classes par les variables de notre objet Tache. Une fois le HTML prêt il sera ajouté à la liste des tâches dans la page.

// 5. Une dernière méthode nous permettra d'enregistrer les tâches en mémoire dans le localStorage. Pour cela, nous devons donner les 4 propriétés sous un format de tableau, et le retourner. Rien de plus ici, la suite se passe dans la classe Todoliste
