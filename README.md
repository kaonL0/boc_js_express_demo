# druesne_epsi_b2_js
Projet de démonstration du cours JS

# Comment ce projet a t il été créé ?
```sh
// depuis un dépot git (github) vierge (README et .gitignore node)
$ git clone https://github.com/kaonL0/druesne_epsi_b2_js.git
// aller dans le dossier
$ cd druesne_epsi_b2_js
// initialise le dépot et créé le fichier package.json
$ npm init
// ajoute le package http-server pour réaliser un serveur http facilement 
$ npm install http-server
// ajoute le package express, framework permettant de structurer une application
$ npm install express
// ajouter au staging
$ git add .
// valider les modifications locales
$ git commit -m "Exemple du cours"
// envoie sur le serveur
$ git push

```

# Comment l'utiliser ?
```sh
// clone le dépot distant sur votre machine
$ git clone https://github.com/kaonL0/druesne_epsi_b2_js.git
// aller dans le dossier
$ cd druesne_epsi_b2_js
// installe les dépendences nécéssaires (à faire une fois ou quand les dépendances changent)
$ npm install
// liste les scripts disponibles dans le fichier package.json
$ run npm-script
// lance un script
$ npm run <nom_du_script>
// en cas de mise à jour distante, faire cette commande pour récupérer les modifications
$ git pull
```

# Que contient-il ?

- log.js : code javascript, utilisation de console.log pour afficher un objet
- index1.js : le serveur node le plus basique, celui de l'exemple [Node.js : Getting started guide](https://nodejs.org/en/docs/guides/getting-started-guide/)
- index2.js : un serveur basique qui renvoie du html
- index3.js : un serveur basique express, celui du cours [Express : basic routing](http://expressjs.com/fr/starter/basic-routing.html)
- dist : un dossier contenant un fichier html d'exemple, permettant d'être le dossier source du serveur http (http-server)

Pour lancer ces différents exemples, vous pouvez faire la commande node adéquate ou bien la commande npm définie (conseillé).
```sh
$ run npm-script
$ npm run log
$ npm run servercors
```