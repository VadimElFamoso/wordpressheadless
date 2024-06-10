<template>
    <h1>SSRTest</h1>
    <p>Bonjour</p>
    <div v-if="pages.length">
      <ul>
        <li v-for="page in pages" :key="page.id">{{ page.title.rendered }}</li>
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
        pages: [],
      };
    },
    async mounted() {
      await this.displayPages();
    },
    methods: {
      async displayPages() {
        try {
          const pages = await $fetch(`${process.env.WORDPRESS_HOST}wp-json/wp/v2/pages`, {
            parseResponse: JSON.parse,
            method: 'GET',
          });
          this.pages = pages;
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
  