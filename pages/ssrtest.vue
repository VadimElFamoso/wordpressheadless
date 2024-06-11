<template>
  <h1>SSRTest</h1>
  <p>Bonjour</p>
  <div v-if="posts.length">
    <h1>Voici la liste des articles :</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title.rendered }}
        <p>
          Afin de voir l'article cliquez sur le lien suivant :
          <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">ici</nuxt-link>
        </p>
      </li>
    </ul>
  </div>
  <div v-else>
    No pages fetched yet.
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

const fetchPosts = async () => {
  try {
    const res = await fetch('https://test.agence-lt.fr/wp-json/wp/v2/posts')
    posts.value = await res.json()
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

onMounted(fetchPosts)
</script>
