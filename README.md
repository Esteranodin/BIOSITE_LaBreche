# Link-in-bio / Mini site

Petit site « link-in-bio » pour le Journal La Brèche. Cette version sert de page de renvoi légère qui affiche :

- un en-tête responsive
- les liens vers les réseaux sociaux
- une grid des derniers articles du site (récupérés depuis le flux RSS)

Technologies principales : Next.js (app router), React, TypeScript (TSX), Tailwind CSS.

---

## Structure importante

- `app/page.tsx` : page principale qui compose les composants.
- `app/components/` : composants UI (Header, ArticlesGrid, SocialLinks...).
- `app/hooks/useFetchArticles.ts` : hook client pour appeler l'API RSS interne.
- `app/api/rss/route.js` : route API qui récupère et parse le flux RSS distant et expose `isPodcast` / `displayImage`.

---

## Développement (local)

Lancer le serveur de développement :

```powershell
npm install
npm run dev
```
Ouvrir ensuite http://localhost:3000 dans votre navigateur

Éditez `app/page.tsx` ou les composants dans `app/components/` — la page se recharge automatiquement.

---



  3. Créer le repo et pousser (exemple public) :

```powershell
# depuis la racine de votre projet
git init
git add .
git commit -m "Initial commit"
git branch -M main

# créer le repo distant et pousser en une commande
gh repo create <votre-nom-utilisateur>/labreche-linkinbio --public --source=. --remote=origin --push
```

Remplacez `<votre-nom-utilisateur>` par votre utilisateur GitHub.

---

## Pousser un repo local vers GitHub (méthode manuelle via HTTPS)

Si vous avez déjà créé le dépôt sur GitHub (option A) :

```powershell
# depuis la racine du projet
git init            # si pas déjà initialisé
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<votre-nom-utilisateur>/labreche-linkinbio.git
git push -u origin main
```

Si Git vous demande des identifiants, vous pouvez :
- utiliser votre identifiant et un Personal Access Token (PAT) créé dans GitHub (recommandé si 2FA activé),
- ou configurer SSH keys et utiliser l'URL SSH à la place.

---

## Fichiers conseillés / .gitignore

Créez un fichier `.gitignore` contenant au minimum :

```
node_modules/
.next/
dist/
.env
*.log
```

---

## Bonnes pratiques / notes

- Centralisez la logique métier côté serveur (ici la détection `isPodcast` et `displayImage` est faite dans `app/api/rss/route.js`).
- Ne stockez jamais de secrets dans le dépôt (utilisez des variables d'environnement et `.env.local` non committé).
- Ajoutez un fichier `LICENSE` si vous souhaitez choisir une licence publique (MIT, Apache, etc.).

---

Si vous voulez, j'ajoute aussi un `.gitignore` et je peux préparer le dépôt GitHub pour vous (création `gh repo create` + push). Dites-moi si je dois procéder et quel nom de repo utiliser.
