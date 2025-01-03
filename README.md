# Planetarium

Bienvenue sur **Planetarium**, un projet d'exercice visant à explorer les interactions de scroll horizontal et les animations de fond avec l'API Canvas.

## Aperçu

![aperçu planetarium](./public/aperçu.gif)

Ce projet offre une expérience immersive dans le système solaire grâce à une interface fluide et des animations dynamiques. Vous pourrez découvrir les planètes avec un élément visuel unique grâce à des effets d’animation réalisés avec l’API Canvas.

## Fonctionnalités

- **Scroll horizontal** : Parcourez les différentes sections du système solaire avec un effet de scroll horizontal fluide.
- **Animations de fond** : Profitez d’un environnement animé pour rendre l’exploration plus immersive.
- **Exploration des planètes** : Chaque section présente une planète avec des images et des informations correspondantes.

## Technologies

Ce projet a été construit avec les outils et technologies suivants :

- **Next.js** : Framework React pour le rendu côté serveur et la gestion des routes.
- **TailwindCSS** : Framework CSS pour la mise en page et les styles.
- **Canvas API** : API JavaScript pour les animations et rendus graphiques personnalisés.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/jonathanbensadoun/planetarium
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet

Voici un aperçu de l'organisation des fichiers principaux :

```
planetarium/
├── public/
│   ├── earth.png
│   ├── jupiter.png
│   ├── mars.png
│   ├── mercury.png
│   └── ... (autres images des planètes)
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   └── PlanetSection.tsx
├── README.md
├── next.config.js
└── ... (autres fichiers de configuration)
```

## Défis rencontrés

- **Gestion du scroll horizontal** : Implémenter un effet fluide et naturel pour une navigation intuitive.
- **Animations avec Canvas API** : Synchroniser les animations de fond avec le contenu pour une expérience homogène.

## Améliorations futures

- Ajouter plus d’interactivité pour chaque planète (exemple : informations supplémentaires au survol).
- Optimiser les performances des animations pour les appareils moins puissants.
- Ajouter une compatibilité mobile améliorée.

## Auteur

Projet réalisé par **Jonathan B.** dans le cadre d’un exercice personnel pour explorer des concepts avancés en développement web.

---

Merci de votre intérêt pour ce projet ! Si vous avez des questions ou des suggestions, n’hésitez pas à me contacter. jo.bensadoun\@gmail.com
