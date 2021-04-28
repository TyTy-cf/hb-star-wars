# HB : Star Wars : Space Battle

## 1/ Création des classes

Je laisse libre cours à votre imagination pour les types des attributs, cependant faite que ça soit cohérent :)

(PS : classe abstraite OK pour "Planet" & "Faction")

- Classe **"Planet"** : elle représentera le lieu de la bataille, elle est caractérisée par :
  - Son nom
  - Une image (on se contentera de l'url de celle-ci => information pour le type de l'attribut)
  
- Classe **"Faction"** : elle représente la faction choisit par le joueur, elle est caractérisée par :
  - Son nom
  - Une image (on se contentera de l'url de celle-ci => information pour le type de l'attribut)

- Classe **"Starship"** : elle représente un vaisseau
  (PS : pas de classe abstraite ici pour simplifier)
  - Son nom
  - Une image (on se contentera de l'url de celle-ci => information pour le type de l'attribut)
  - Un "Starship" est affilié à une faction
  - Le "Starship" est-il équipé de l'Hyperpropulsion ?
  - Un "Starship" a un blindage, qui représente la réduction des dégâts qu'il subira
  - Un "Starship" a un nombre de point de vie, qui représente le nombre de dégâts qu'il peut prendre avant d'exploser
  - Un "Starship" a des "Weapons" (voir classe suivante) (PS : oui, il peut en avoir plusieurs)

- Classe **"Weapon"** : elle représente une arme qu'un vaisseau peut avoir
  (PS : pas de classe abstraite ici pour simplifier)
  - Son nom
  - Son image
  - Une valeur de dégâts, qui représente le nombre de vie à retirer à sa cible
  - Temps de recharge, qui représente le fait qu'une arme ne peut pas être utilisé plusieurs fois de suite
    (PS : pour simplifier le fonctionnement du temps de recharge, on imaginera qu'il y a une notion de tour)

