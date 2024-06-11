<template>
    <h1>SSRTest</h1>
    <p>Bonjour</p>
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id" class="article_content">
        <h1> {{ post.title }} </h1>
        {{ post.content.rendered }}
      </div>


      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
      </ul>

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
  