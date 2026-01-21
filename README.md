# Link-in-bio / Mini site

Petit site « link-in-bio » pour le Journal La Brèche. Cette version sert de page de renvoi légère qui affiche :

- un en-tête responsive
- les liens vers les réseaux sociaux
- une grid des derniers articles du site (récupérés depuis le flux RSS)

Technologies principales : Next.js (app router), React, TypeScript (TSX), Tailwind CSS.

---

## Structure importante

- `app/page.tsx` : page principale.
- `app/layout.tsx` : layout global de l’application.
- `app/api/rss/route.js` : route API qui récupère et parse le flux RSS distant.
- `components/` : composants UI réutilisables.
- `hooks/useFetchArticles.ts` : hook client pour appeler l'API RSS interne.
- `public/` : fichiers statiques (images, favicon, etc).

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

## Notes

- Le flux RSS est récupéré depuis `https://labreche.fr/feed/` (modifiable dans `app/api/rss/route.js`).
- Ne jamais stocker de secrets dans le dépôt (utilisez des variables d'environnement et `.env.local` non committé).

---