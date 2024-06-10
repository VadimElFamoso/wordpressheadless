import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import ssrtest from '../pages/ssrtest.vue';

const server = express()

console.log("Allo");

server.get('/superssr', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: ssrtest,
  })
})

server.listen(3000, () => {
  console.log('ready')
})