// On commence par importer la classe Tache, car on en aura besoin

// On définit la classe Todolist, exportable et par défaut :
// ============================================================
// TODOLIST
// ============================================================
  

// 1. Définissez une propriété privée #listeTaches comme étant un tableau vide.
// 2. Définissez une propriété publique ordreTriDefaut à "▼".

// ============================================================
// CONSTRUCTEUR
// ============================================================
// Il devra appeler deux méthodes :
//  - une pour récupérer la liste des tâches stockée dans le localStorage, si elle existe,
//  - l'autre pour afficher les tâches sur la page.

// ============================================================
// MÉTHODES
// ============================================================


// 1. Vous commencerez avec des getters et setters pour la variable privée

// 2. Créer la méthode qui enregistre les tâches dans le localStorage.
// Elle devra faire appel à la méthode "objetToJSON" de chaque Tache, que vous aurez créée au préalable dans la classe Tache.
// une fois le tableau JSON construit, il sera stocké dans le localStorage.

// 3. Créer la méthode qui récupère les tâches dans le localStorage, si elles existent.
// La récupération demandera de récupérer le tableau JSON stocké dans le localStorage, puis de le repasser en JS pour récupérer les infos.
// Ensuite, avec les infos, il faudra recréer les objets, un après l'autre.
// la liste ainsi obtenue sera remise dans la variable #listeTaches.

// 4.1 On créera ensuite une méthode pour afficher les tâches au bon endroit sur la page.
// On commencera par vider l'élément HTML de son contenu, avant de le reremplir avec #listeTaches
// On appellera la méthode de chaque Tache creerHTML.
// Dans le cas où il n'y a pas de tâches on appelera notre méthode afficherPasDeTache.

// 4.2 Il nous faut donc construire notre méthode afficherPasDeTache

// 5. Construire ensuite une méthode enregistrerNouvelleTache, qui permettra d'ajouter une nouvelle tâche à #listeTaches.
//  On pensera bien à enregistrer le changement dans le localStorage avant de terminer.

// 6. Construire la méthode supprimerLaTache, qui prendra en paramètre l'ID HTML de la tache à supprimer.
// il faudra enlever la tâche de notre tableau, puis sauvegarder les changements dans le localStorage.
// Si c'était la dernière tâche qui était supprimée, il faut rafficher le message qui dit qu'on a pas de tâche...


// ============================================================
// MÉTHODES POUR LE TRI
// pour aller plus loin...
// ============================================================

// 1. Construire une méthode trierLesTaches, qui commencera par étudier le HTML, et modifier le bouton d'ordre si on a cliqué dessus.
// En fonction de l'ordre et du filtre sélectionné, elle appelera ensuite la méthode triDuTableau.
// Enfin elle affichera les taches avec la méthode qui convient.

// 2. Construire la méthode triDuTableau qui est en fait un switch avec deux paramètres (filtre et ordre).
// Elle ne fait qu'appeler la bonne méthode de tri en fonction du filtre.

// 3.construire la méthode triParPriorité, avec l'ordre en paramètre.
// en fonction de la valeur de la priorité, on rangera les tâches, puis, si l'ordre est différent de l'ordre par défaut, 
// on renversera le tableau.

// 4. Construire la méthode triParDate, qui prendra comme sa cousine l'ordre en paramètre.
// utiliser sort pour trier ensuite le tableau, en appelant une fonction interne comparaisonDate
// réinstancier les dates avec Date(), puis les comparer ensemble. 
// - si date a < date b, retourner -1
// - si date a > date b, retourner 1
// - sinon retourner 0
// Cela permet à sort de savoir ce qu'il doit faire des lignes (remonter, descendre, laisser en place).
// Enfin, vérifier si on doit inverser le tableau

// 5. Construire enfin la méthode triParAlpha.
// Très similaire à celle pour les dates, vous comparerez les titres des tâches.

// RESSOURCES
// on pourra aller voir ce lien, pour le tri, si on galère à trouver une solution : https://www.delftstack.com/fr/howto/javascript/sort-array-of-objects-by-singlekey-with-date-value/