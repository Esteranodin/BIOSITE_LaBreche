# Link-in-bio / SPA - Journal La Brèche

Site vitrine "link-in-bio" pour le Journal La Brèche. Une page de renvoi légère et moderne qui centralise :

- 🔗 Les liens vers les réseaux sociaux et options de soutien
- 📰 Une grille des derniers articles récupérés depuis le flux RSS
- 🎨 Un design responsive avec couleurs dynamiques

## 🚀 Technologies

- **Next.js 15** - App Router avec Server Components
- **TypeScript** - Typage statique
- **Tailwind CSS** - Design responsive et moderne
- **React Icons** - Icônes pour réseaux sociaux
- **RSS Parser** - Parsing du flux RSS

## 📁 Structure du projet

```
biosite/
├── app/
│   ├── api/rss/          # Route API pour récupération RSS
│   ├── layout.tsx        # Layout principal + métadonnées
│   └── page.tsx          # Page d'accueil
├── components/
│   ├── articles/         # Composants liés aux articles
│   ├── layout/           # Header, Footer, Logo
│   └── links/            # Liens sociaux et principaux
├── hooks/
│   ├── useFetchArticles  # Récupération des articles RSS
│   └── useIsTouchDevice  # Détection appareil tactile
├── utils/
│   ├── colorCard.ts      # Attribution couleurs aléatoires
│   └── textFormatting.ts # Formatage texte
└── types/
    └── index.ts          # Types TypeScript
```

## 🛠️ Installation et démarrage

**Installation des dépendances :**
```bash
npm install
```

**Lancement en mode développement :**
```bash
npm run dev
```

**Linter (vérification du code) :**
```bash
npm run lint
```

## ✨ Fonctionnalités

### Récupération automatique des articles
- Parsing du flux RSS via route API Next.js
- Affichage des 12 derniers articles en grille responsive
- Gestion des états de chargement et d'erreur

### Design dynamique
- Effets hover adaptés desktop/mobile
- Interface tactile optimisée

### SEO et partage social
- Métadonnées Open Graph complètes
- Twitter Cards configurées

## ⚙️ Configuration

### Flux RSS

L'URL du flux RSS est configurée dans `hooks/useFetchArticles.ts` :

```typescript
const response = await fetch("/api/rss");
```

La route API (`app/api/rss/route.js`) récupère le flux depuis :
```javascript
const RSS_URL = "https://journal-labreche.fr/feed/";
```

**Pour modifier l'URL du flux RSS :**
1. Ouvrez `app/api/rss/route.js`
2. Modifiez la constante `RSS_URL`
3. Redémarrez le serveur de développement

### Images externes

Les images provenant du flux RSS sont autorisées via `next.config.ts`. Si le domaine des images change, mettez à jour la configuration :

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "nouveau-domaine.fr", // Mettez à jour ici
    },
  ],
}
```

## 🌐 Déploiement

Application déployée sur Vercel : [https://labreche.vercel.app/](https://labreche.vercel.app/)

## 📝 License

Projet développé pour le journal papier, libre et indépendant *La Brèche*.