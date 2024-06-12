<template>
  <h1>Page d'article</h1>
  <div v-if="post">
    <h1>{{ post.title.rendered }}</h1>
    <div v-html="post.content.rendered"></div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAsyncData } from 'nuxt/app'

const route = useRoute()
console.log(route);

const { data: post, pending, error } = await useAsyncData(() => 
  fetch(`http://wordpress.home/wp-json/wp/v2/posts/${route.params.id}`)
    .then(res => res.json())
)

if (error.value) {
  console.error('An error occurred:', error.value)
}
</script>