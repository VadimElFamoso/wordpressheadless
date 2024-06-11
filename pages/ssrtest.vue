<template>
  <h1>SSRTest</h1>
  <p>Bonjour</p>
  <div v-if="posts.length">
    <div v-for="post in posts" :key="post.id" class="article_content">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
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
  async asyncData() {
    try {
      const response = await fetch('https://test.agence-lt.fr/wp-json/wp/v2/posts');
      const posts = await response.json();
      return { posts };
    } catch (error) {
      console.error('An error occurred:', error);
      return { posts: [] };
    }
  }
};
</script>

<style>
/* Ajoutez vos styles ici */
</style>
