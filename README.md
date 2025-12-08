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

## Notes

- Centralisation de la logique métier côté serveur (ici la détection `isPodcast` et `displayImage` est faite dans `app/api/rss/route.js`).
- Ne jamais stocker de secrets dans le dépôt (utilisez des variables d'environnement et `.env.local` non committé).

---