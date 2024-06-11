<template>
    <h1>SSRTest</h1>
    <p>Bonjour</p>
    <div v-if="posts.length">
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
      </ul>

      <h1> {{ post.title }}</h1>
      <div class="article_content">
        {{ post.content.rendered }}
      </div>
    </div>
    <div v-else>
      No pages fetched yet.
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        posts: [],
      };
    },
    async mounted() {
      await this.displayPages('https://test.agence-lt.fr/');
    },
    methods: {
      async displayPages(root) {
        try {
          const posts = await $fetch(`${root}wp-json/wp/v2/posts`, {
            parseResponse: JSON.parse,
            method: 'GET',
          });
          this.posts = posts;
        } catch (error) {
          console.error('An error occurred:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Ajoutez vos styles ici */
  </style>
  