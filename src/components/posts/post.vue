<template>
  <div class="post">
    <div class="content">
      <Text type="h1">{{ post.title }}</Text>
      <Text type="body">{{ post.body }}</Text>
    </div>

    <div class="info-block">
      <div class="reactions">
        <button v-on:click="handleLike(post.id)" :class="userReactions.get(post.id) && 'reaction'">
          <IconLike />
          <Text type="caption">Like</Text>
          <Text type="number-tab">{{ post.reactions.likes }}</Text>
        </button>
        <button v-on:click="handleDislike(post.id)" :class="userReactions.get(post.id) === false && 'reaction'">
          <IconDislike />
          <Text type="caption">Trash</Text>
          <Text type="number-tab">{{ post.reactions.dislikes }}</Text>
        </button>
      </div>

      <NuxtLink :to="'/posts/' + post.id" class="comment-link-button">
        <Text type="caption" color="primary">Open comments</Text>
      </NuxtLink>

      <Text type="caption" color="ghost">
        {{ $dayjs(new Date()).format('DD-MM-YYYY') }}
      </Text>

      <div class="tags">
        <template v-for="(tag, index) in post.tags" :key="'tagid-' + tag">
          <div class="tag">
            <Text type="caption">{{ tag }}</Text>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconLike from '~/assets/icons/like.svg'
import IconDislike from '~/assets/icons/dislike.svg'

import type { Post } from './posts.vue'

const { data: post } = defineProps<{ data: Post }>()

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
</script>
