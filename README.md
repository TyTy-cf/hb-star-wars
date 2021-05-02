# HB : Star Wars : Space Battle

## 1/ Création des classes

Je laisse libre cours à votre imagination pour les types des attributs, cependant faite que ça soit cohérent :)

(PS : classe abstraite OK pour "Planet" & "Faction")

- Classe **"Planet"** : elle représentera le lieu de la bataille, elle est caractérisée par :
  - Un identifant unique (de type Guid)
  - Son nom
  - Une image (on se contentera de l'url de celle-ci => information pour le type de l'attribut)
  
- Classe **"Faction"** : elle représente la faction choisit par le joueur, elle est caractérisée par :
  - Un identifant unique (de type Guid)
  - Son nom
  - Une image (on se contentera de l'url de celle-ci => information pour le type de l'attribut)

- Classe **"Starship"** : elle représente un vaisseau
  (PS : pas de classe abstraite ici pour simplifier)
  - Un identifant unique (de type Guid)
  - Son nom
  - Une image (on se contentera de l'url de celle-ci => information pour le type de l'attribut)
  - Un "Starship" a une Faction
  - Le "Starship" est-il équipé de l'hyperpropulsion ?
  - Un "Starship" a un blindage, qui représente la réduction des dégâts qu'il subira
  - Un "Starship" a un nombre de point de vie, qui représente le nombre de dégâts qu'il peut prendre avant d'exploser
  - Un "Starship" a des "Weapons" (voir classe suivante) (PS : oui, il peut en avoir plusieurs)

- Classe **"Weapon"** : elle représente une arme qu'un vaisseau peut avoir
  (PS : pas de classe abstraite ici pour simplifier)
  - Un identifant unique (de type Guid)
  - Son nom
  - Son image
  - Une valeur de dégâts, qui représente le nombre de vie à retirer à sa cible
  - Temps de recharge, qui représente le fait qu'une arme ne peut pas être utilisé plusieurs fois de suite
    (PS : pour simplifier le fonctionnement du temps de recharge, on imaginera qu'il y a une notion de tour)

## 2/ Création des Services

- Il faut maintenant créer les **Services** pour nos différentes classes, afin d'avoir une gestion "propre" de nos données.
- Chaque **Service** doit gérer un certain type de données.
- Faites les **Services** correspondant à chaque fois.

### 2.1/ Créer des objets "de test"

- Dans chacun de vos **Services** vous devrez créer les bons objets adéquats.
- Ne perdez pas de vue, que les Guid seront tous créés de la même manière, voir cours
- (Pour les images soit vous récupérez une URL d'image sur internet, soit vous stockerez les images dans votre projet
  dans un dossier images/nomObjetAdequat dans le dossier assets)

#### 2.1.1/ Objets Planet

  - Nom : Hoth
  - Image : https://e7.pngegg.com/pngimages/111/926/png-clipart-hoth-m-02j71-planet-earth-echo-base-roblox-vip-sphere-earth.png
  - Image : 'assets/images/planet/nomImagePourLaPlaneteHoth.png'
    (Dans la balise html : `<img src="{{planet.pathImage}}" alt="">`)


  - Nom : Tatooine
  - Image : https://c3.klipartz.com/pngpicture/640/693/sticker-png-png-planets-of-star-wars-tatooine-icon-thumbnail.png


  - Nom : Aldérande
  - Image : https://p1.hiclipart.com/preview/430/13/161/png-planets-of-star-wars-alderaan-icon-png-icon.jpg

#### 2.1.2/ Objets Faction

- Nom : Empire
- Image : https://w7.pngwing.com/pngs/83/280/png-transparent-palpatine-anakin-skywalker-star-wars-empire-at-war-forces-of-corruption-stormtrooper-galactic-empire-stormtrooper-emblem-logo-symmetry.png


- Nom : Rebelle
- Image : https://stock.flashmode.tn/wp-content/uploads/2020/06/star-wars-rebel-logo-png-834.png


- Nom : Mandaloriens
- Image : https://img1.pnghut.com/4/16/20/qig08DpHCA/joint-galactic-empire-jango-fett-silhouette-symbol.jpg

#### 2.1.3/ Objets Weapon

- Nom : Ls1-Laser cannons
- Image : https://static.wikia.nocookie.net/starwars/images/7/72/Stay_on_Target_TCG.jpg/revision/latest/scale-to-width-down/1000?cb=20150830055930
- Dégâts : 40
- Temps recharge : 0


- Nom : KX9 laser cannon
- Image : https://static.wikia.nocookie.net/starwars/images/0/01/X-wing_KX9_laser_cannon_battlefront.png/revision/latest/scale-to-width-down/1000?cb=20160704064823
- Dégâts : 35
- Temps recharge : 0


- Nom : MG7 proton torpedo launcher
- Image : https://static.wikia.nocookie.net/starwars/images/b/b7/MG7_proton_torpedo_launcher_battlefront.png/revision/latest/scale-to-width-down/1000?cb=20160704064839
- Dégâts : 50
- Temps recharge : 2

#### 2.1.4/ Objets Starship

- Nom : TIE/LN starfighter
- Image : https://www.pngfind.com/pngs/m/26-268947_step-star-wars-tie-fighter-png-transparent-png.png
- Faction : Empire
- Hyperpropulsion : non
- Blindage : 14
- Point de vie : 500
- Armes : Ls1-Laser cannons


- Nom : X-Wing
- Image : https://www.pngjoy.com/pngm/330/6196347_star-wars-laser-star-wars-x-wing-png.png
- Faction : Rebelle
- Hyperpropulsion : oui
- Blindage : 15
- Point de vie : 480
- Armes : MG7 proton torpedo launcher et KX9 laser cannon

(Rusez pour les Armes et Faction du Starship !)

## 3/ Création des components principaux

- Vous pouvez vous créer un component de test, dans lequel vous appellerez vos Services afin de vérifier que tout fonctionne.

### 3.1/ Création d'un component de nom : planet-index

- Le rôle de ce component est d'afficher toutes les planètes (avec leur images si vous les avez incluses)
  (PS : attention à partir de maintenant je regarderai mieux l'html/css, et je veux que la page soit responsive, regardez la documentation de Bootstrap !)

### 3.2/ Création d'un component de nom : faction-index

- Le rôle de ce component est d'afficher les factions avec images et non, afin de proposer à l'utilisateur de choisir sa faction.
  Pour le moment, vous afficherez les factions disponibles, avec un css sympathique (par exemple que l'image bouge légèrement lorsque l'utilisateur passe sa souris dessus)

## 4/ Ajout de la navigation

- Ajouter une route de nom 'faction' qui permet d'aller sur le component **faction-index**
- Ajouter une route de nom 'planet' qui permet d'aller sur le component **planet-index**
- Lorsqu'on lance l'application, on doit arriver sur le component **faction-index**
    
## 5/ Amélioration de l'interface et navigation

- Il faut maintenant créer un component de nom 'starship-faction'
- Son rôle est d'afficher tous les vaisseaux à partir d'une faction ou un message informant l'utilisateur qu'aucun vaisseau n'existe pour cette faction
- Le component doit récupérer l'information de la faction à partir d'un **@Input** (il est donc le component fille), depuis le component **faction-index** (qui sera le component mère)
- L'action permettant l'envoie de la faction au component **starship-faction** est le **clic sur l'une des images**
- Ajouter un message à l'utilisateur pour lui dire de sélectionner la faction dans laquelle il souhaite jouer (dans le component **faction-index**)
- Ajouter un moyen d'informer l'utilisateur lui permettant de voir sur quelle faction il a cliqué (trouver un moyen de faire ressortir l'image sélectionnée)

## 6/ Préparation au jeu 

- L'idée de cette partie est de faire un component qui a pour but d'afficher une "card" de vaisseau, avec son image, son nom (en dessous de l'image), un récapitulatif des stats du vaisseau, et les différentes Weapon du vaisseau, sous forme de bouton avec l'image de la Weapon.






