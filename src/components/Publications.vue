<template>
  <template v-for="(publicate, index) in publications" :key="'comment-' + publicate.id">
    <div class="publicate">
      <div class="content">
        <Text type="h1">{{ publicate.title }}</Text>
        <Text type="body">{{ publicate.body }}</Text>
      </div>

      <div class="info-block">
        <div class="reactions">
          <button v-on:click="handleLike(publicate.id)" :class="userReactions.get(publicate.id) && 'reaction'">
            <IconLike />
            <Text type="caption">Like</Text>
            <Text type="number-tab">{{ publicate.reactions.likes }}</Text>
          </button>
          <button
            v-on:click="handleDislike(publicate.id)"
            :class="userReactions.get(publicate.id) === false && 'reaction'">
            <IconDislike />
            <Text type="caption">Trash</Text>
            <Text type="number-tab">{{ publicate.reactions.dislikes }}</Text>
          </button>
        </div>

        <button class="comment-button">
          <Text type="caption" color="primary">Open comments</Text>
        </button>

        <Text type="caption" color="ghost">
          {{ $dayjs(new Date()).format('DD-MM-YYYY') }}
        </Text>

        <div class="tags">
          <template v-for="(tag, index) in publicate.tags" :key="'tagid-' + tag">
            <div class="tag">
              <Text type="caption">{{ tag }}</Text>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconLike from '~/assets/icons/like.svg'
import IconDislike from '~/assets/icons/dislike.svg'

type Tag = 'history' | 'american' | 'crime'
type Reaction = {
  likes: number
  dislikes: number
}
type Publication = {
  id: number
  title: string
  body: string
  tags: Tag[]
  reactions: Reaction
  views: number
  userId: number
}
const publications = ref<Publication[]>([])
const userReactions = ref(new Map())

function handleLike(id: number) {
  if (userReactions.value.get(id) === true) {
    return userReactions.value.delete(id)
  }
  return userReactions.value.set(id, true)
}
function handleDislike(id: number) {
  if (userReactions.value.get(id) === false) {
    return userReactions.value.delete(id)
  }
  return userReactions.value.set(id, false)
}

type Posts = {
  posts: Publication[]
  total: number
  skip: number
  limit: number
}
async function fetch() {
  try {
    const data = await $fetch<Posts>('https://dummyjson.com/posts?limit=5')

    publications.value = data?.posts ?? []
  } catch (e) {}
}

onMounted(() => {
  fetch()
})
</script>
