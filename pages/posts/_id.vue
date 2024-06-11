<template>
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
import { ref, onMounted } from 'vue'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`https://test.agence-lt.fr/wp-json/wp/v2/posts/${route.params.id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch the post')
    }
    post.value = await res.json()
  } catch (error) {
    console.error('An error occurred:', error)
  }
})
</script>
