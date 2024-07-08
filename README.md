# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Bien sûr ! Voici la documentation mise à jour sans l'utilisation de `inject` pour la configuration des requêtes API.

---

# Documentation pour l'Utilisation de l'Architecture WordPress Headless avec Nuxt.js

## Introduction

L'architecture WordPress headless sépare le back-end (gestion de contenu) du front-end (affichage) de WordPress. Cela permet d'utiliser WordPress uniquement comme un CMS (Content Management System) tout en utilisant des frameworks modernes comme Nuxt.js pour le front-end.

## Prérequis

- Serveur Web (Apache, Nginx)
- PHP (version 7.4 ou supérieure)
- Base de données MySQL/MariaDB
- WordPress (version 5.0 ou supérieure)
- Nuxt.js (version 3.0 ou supérieure)
- Node.js et npm/yarn

## Installation et Configuration de WordPress

### Installation de WordPress

1. Téléchargez WordPress depuis [wordpress.org](https://wordpress.org/download/).
2. Décompressez le fichier téléchargé et placez le contenu dans le répertoire de votre serveur web (ex: `/var/www/html`).
3. Créez une base de données pour WordPress.
4. Accédez à l'URL de votre site WordPress pour lancer l'installation.
5. Suivez les instructions pour configurer WordPress.

### Configuration de WordPress en mode Headless

1. **Désactiver les thèmes WordPress par défaut :**
    - Dans le tableau de bord WordPress, allez dans `Apparence > Thèmes`.
    - Activez un thème minimal comme "Twenty Twenty-One" ou créez un thème vide pour désactiver l'affichage par défaut.

2. **Activer les Permaliens :**
    - Allez dans `Réglages > Permaliens`.
    - Sélectionnez "Nom de l’article" et enregistrez les modifications.

3. **Configurer l'API REST de WordPress :**
    - L'API REST est activée par défaut à partir de WordPress 4.7. Vous pouvez vérifier son fonctionnement en accédant à l'URL : `https://votre-site.com/wp-json`.


### Création d'un Projet Nuxt.js

1. **Installer Vue CLI (si ce n'est pas déjà fait, le CLI Node le possède de base) :**
    ```bash
    npm install -g @vue/cli
    ```

2. **Créer un nouveau projet Nuxt.js :**
    ```bash
    npx create my-headless-wordpress
    cd my-headless-wordpress
    ```

3. **Suivez les instructions pour configurer votre projet Nuxt.js.**

### Création d'un Composant pour Récupérer les Articles WordPress

1. **Créer un fichier pour les requêtes API :**

    ```js
    // services/wp-api.js
    export const getPosts = async () => {
      const response = await fetch('https://votre-site.com/wp-json/wp/v2/posts');
      const posts = await response.json();
      return posts;
    };
    ```

2. **Créer un composant pour afficher les articles :**

    ```vue
    <!-- components/Posts.vue -->
    <template>
      <div>
        <h1>Articles</h1>
        <div v-for="post in posts" :key="post.id">
          <h2>{{ post.title.rendered }}</h2>
          <div v-html="post.content.rendered"></div>
        </div>
      </div>
    </template>

    <script>
    import { getPosts } from '~/services/wp-api';

    export default {
      data() {
        return {
          posts: []
        };
      },
      async mounted() {
        this.posts = await getPosts();
      }
    };
    </script>
    ```

3. **Utiliser le composant dans une page :**

    ```vue
    <!-- pages/index.vue -->
    <template>
      <div>
        <Posts />
      </div>
    </template>

    <script>
    import Posts from '~/components/Posts';

    export default {
      components: {
        Posts
      }
    };
    </script>
    ```

## Déploiement

### Déploiement du Front-end

- Vous pouvez déployer votre application Nuxt.js sur des plateformes comme Vercel, Netlify, ou sur un serveur de votre choix.
- Suivez les instructions de déploiement propres à votre plateforme choisie.

## Conclusion

Vous avez maintenant une configuration basique pour utiliser WordPress en tant que CMS headless avec Nuxt.js comme front-end. Pour aller plus loin, vous pouvez explorer l'utilisation de GraphQL avec WordPress en utilisant des plugins comme WPGraphQL, ou intégrer des fonctionnalités avancées dans votre application front-end.

---
