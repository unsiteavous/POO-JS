# Créer une librairie
Dans bien des cas, on code quelque chose pour un site, et un autre, et encore un autre... Et on se rend compte que ce serait super de pouvoir créer une librairie, à installer dans nos projets, plutôt que de réinventer la roue à chaque projet. 

Pour cela, on a besoin de plusieurs choses :

### Un code modulable
En effet, si on code quelque chose pour un projet en particulier, il répondra aux attentes de ce projet : couleurs, polices, formes, animations, ... tout cela correspondra au cahier des charges de ce projet, et ne sera pas forcément réutilisable ailleurs.

Il est donc important de penser aux éléments qui peuvent changer d'un projet à l'autre, et de permettre de les modifier avec des paramètres simples.

### Une documentation claire et précise
Si le code est modulable mais que je ne sais pas comment m'en servir, ça sert à rien. Il faut documenter le code, les paramètres qu'on peut modifier, comment les modifier, ... Si vous vous dites "je m'en souviendrai", je peux vous assurer que vous vous trompez ! ;) 

### Faire un dépôt
Vous savez déjà travailler avec git. Mais votre branche de développement contient peut-être du code qui n'a pas à être envoyé dans un projet : on ne veut, dans le projet, que le code terminé, utile. 

On pourra ainsi faire une branche `dev`, dans laquelle on poussera notre code en cours de création, et sur la branche `main`, on ne mettra que le code fini, prêt à l'emploi.

### Import dans un projet
Lorsque nous voudrons utiliser notre code dans un autre projet, on aura juste à faire `git clone`, et à appeler le fichier de script dans notre index.html. Super ! 