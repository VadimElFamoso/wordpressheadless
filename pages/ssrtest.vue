<template>
  <h1>SSRTest</h1>
  <p>Bonjour</p>
  <div v-if="posts.length">

    <h1>Voici la liste des articles :</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}
        <p>Afin de voir l'article cliquez sur le lien suivant : <a href="{{ post.link }}">ici</a></p>
      </li>
    </ul>


  </div>
  <div v-else>
    No pages fetched yet.
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app'

const { data: posts, error } = await useAsyncData('posts', () =>
  fetch('https://test.agence-lt.fr/wp-json/wp/v2/posts').then(res => res.json())
)

if (error.value) {
  console.error('An error occurred:', error.value)
}
</script>

<style>
/* Ajoutez vos styles ici */
</style>
