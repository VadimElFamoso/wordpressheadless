<template>
  <div>
    <h1 v-if="post">{{ post.title.rendered }}</h1>
    <div v-if="post" v-html="post.content.rendered"></div>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

const fetchPost = async () => {
  try {
    const res = await fetch(`https://test.agence-lt.fr/wp-json/wp/v2/posts/${route.params.id}`)
    post.value = await res.json()
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

onMounted(fetchPost)
</script>
