<template>
    <div>
        <h1>{{ post.title.rendered }}</h1>
        <div v-html="post.content.rendered"></div>
    </div>
</template>
  
  <script setup>
  import { useAsyncData, useRoute } from 'nuxt/app'
  
  const route = useRoute()
  const { data: post, error } = await useAsyncData(`posts-${route.params.id}`, () =>
    fetch(`https://test.agence-lt.fr/wp-json/wp/v2/posts/${route.params.id}`).then(res => res.json())
  )
  
  if (error.value) {
    console.error('An error occurred:', error.value)
  }
  </script>
  