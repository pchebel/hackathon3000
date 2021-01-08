# hackathon3000

Projet réalisé lors de l'UE E - Hackathon de la TAF LOGIN

## Getting started - Local

### Configuration du frontend:

- Installer NodeJS
- Ouvrir une console dans `./frontend/hackathon3000`
- utiliser la commande `npm install`
- Lancer avec `npm start`

### Configuration du backend:

- Creer un environnement de developpement python (Optionel) :

```shell
# macOS/Linux
sudo apt-get install python3-venv    # If needed
python3 -m venv env

# Windows
python -m venv env
```

- L'activer

```shell
# macOS/Linux
source env/bin/activate

# Windows
env\scripts\activate
```

- Installer les dependances

```
pip install -r requirements.txt
```

- Lancer avec : `python -m flask run`

## Deploiement sur scalingo depuis Git

Les instructions suivantes sont à réaliser 2 fois, une première fois pour le backend, une seconde fois pour le frontend

- Initialiser le projet git si ce n'est déjà fait
- S'incrire sur Scalingo
- Créer une application
- Suivre les instructions, lien utiles : [First Steps On Scalingo](https://doc.scalingo.com/platform/getting-started/first-steps)
- Choisir les addons (MongoDB)
- Modifier les variables d'environnement

```powershell
# Pour le backend ajouter:
PROJECT_DIR=backend

# Pour le frontend ajouter:
PROJECT_DIR=frontend/hackathon3000
---
```

- Ajouter scalingo comme remote au git avec la commande indiquée par scalingo :

```powershell
# Dans notre cas :
git remote add scalingo git@ssh.osc-fr1.scalingo.com:hackathon3000.git
```

- Push la branche master sur scalingo pour déclencher le déploiement

**/!\\** Avant de déployer le backend, si vous avez ajouté des dépendances au backend, il faut mettre à jour le ficher `requirements.txt`, en ouvrant une console dans le dossier `/backend`, en activant l'environnement virtuel python, et saisissant `pip freeze > requirements.txt`, puis commiter les changements et enfin push

**/!\\** Si vous déployez pour le première fois le frontend ou si le backend a changé d'adresse, il faut copier l'adresse du backend dans le fichier `/frontend/hackathon3000/src/Components/HomePage/HomePage.jsx` en remplaçant la valeur de la variable `API_URL` :

```js
// Par exemple
const API_URL = "https://hackathon3000.osc-fr1.scalingo.io";
```

## Participants:

- Kevin THIEBAUT
- Khalil MAHFOUDH
- Pierrick CHEBEL
