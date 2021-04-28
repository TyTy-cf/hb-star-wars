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
  - Image : selon votre convenance

  - Nom : Tatooine
  - Image : selon votre convenance

  - Nom : Aldérande
  - Image : selon votre convenance

#### 2.1.2/ Objets Faction

- Nom : Empire
- Image : selon votre convenance

- Nom : Rebelle
- Image : selon votre convenance

- Nom : Mandaloriens
- Image : selon votre convenance

#### 2.1.3/ Objets Weapon

- Nom : Ls1-Laser cannons
- Image : https://static.wikia.nocookie.net/starwars/images/7/72/Stay_on_Target_TCG.jpg/revision/latest/scale-to-width-down/1000?cb=20150830055930
- Dégâts : 40
- Temps recharge : 0

- Nom : KX9 laser cannon
- Image : https://static.wikia.nocookie.net/starwars/images/0/01/X-wing_KX9_laser_cannon_battlefront.png/revision/latest/scale-to-width-down/1000?cb=20160704064823
- Dégâts : 20
- Temps recharge : 0

- Nom : MG7 proton torpedo launcher
- Image : https://static.wikia.nocookie.net/starwars/images/b/b7/MG7_proton_torpedo_launcher_battlefront.png/revision/latest/scale-to-width-down/1000?cb=20160704064839
- Dégâts : 50
- Temps recharge : 2

#### 2.1.4/ Objets Starship

- Nom : TIE/LN starfighter
- Image : https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161109040841
- Faction : Empire
- Hyperpropulsion : non
- Blindage : 14
- Point de vie : 500
- Armes : 2 Ls1-Laser cannons

- Nom : X-Wing
- Image : https://static.wikia.nocookie.net/starwars/images/6/60/Xwing-SWB.jpg/revision/latest/scale-to-width-down/500?cb=20160704070524
- Faction : Rebelle
- Hyperpropulsion : oui
- Blindage : 15
- Point de vie : 480
- Armes : 2 MG7 proton torpedo launcher et 4 KX9 laser cannon

(Rusez pour les Armes et Faction du Starship !)







