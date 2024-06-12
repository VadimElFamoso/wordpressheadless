<template>
  <h1>SSRTest</h1>
  <div v-if="posts && posts.length">
    <h1>Voici la liste des articles :</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title.rendered }}
        <p>
          Afin de voir l'article cliquez sur le lien suivant : 
          <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">Lien de l'article</nuxt-link>
        </p>
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
  fetch('http://wordpress.home/wp-json/wp/v2/posts').then(res => res.json())
)

if (error.value) {
  console.error('An error occurred:', error.value)
}
</script>
