<template>
  <template v-for="(post, index) in posts" :key="'comment-' + post.id">
    <Post :data="post" />
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Post from './post.vue'

type Tag = 'history' | 'american' | 'crime'
type Reaction = {
  likes: number
  dislikes: number
}
export type Post = {
  id: number
  title: string
  body: string
  tags: Tag[]
  reactions: Reaction
  views: number
  userId: number
}
const posts = ref<Post[]>([])

type Posts = {
  posts: Post[]
  total: number
  skip: number
  limit: number
}
async function fetch() {
  try {
    const data = await $fetch<Posts>('https://dummyjson.com/posts?limit=5')

    posts.value = data?.posts ?? []
  } catch (e) {}
}

onMounted(() => {
  fetch()
})
</script>
