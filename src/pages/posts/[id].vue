<template>
  <Post v-if="post" :data="post" />

  <div class="comments">
    <Text v-if="comments?.total" type="h1">{{ $t('total-comments', { count: comments?.total ?? 0 }) }}</Text>

    <template v-for="(comment, index) in comments?.comments" :key="'comment-' + comments.id">
      <div class="comment">
        <img src="/assets/profile.svg" alt="user-profile" />

        <div class="comment-content">
          <div class="comment-info">
            <Text type="semibold">{{ comment.user.fullName }}</Text>
            <Text type="body">{{ comment.body }}</Text>
          </div>

          <div class="comment-options">
            <Text type="caption" color="ghost">Today</Text>
            <button v-on:click="handleDeleteComment(comment.id)">
              <Text type="danger">Удалить</Text>
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Post from '~/components/posts/post.vue'
import type { Post as PostTypes } from '~/components/posts/posts.vue'

const route = useRoute()

type Comment = {
  id: number
  body: string
  postId: number
  likes: number
  user: {
    id: number
    username: string
    fullName: string
  }
}
type CommentsDataTypes = {
  comments: Comment[]
  total: number
  skip: number
  limit: number
}

const post = ref<PostTypes>()
const comments = ref<CommentsDataTypes>()

const handleDeleteComment = (id: number) => {}

async function fetch() {
  try {
    const dataPost = await $fetch<PostTypes>(`https://dummyjson.com/posts/${route.params.id}`)
    const dataComments = await $fetch<CommentsDataTypes>(
      `https://dummyjson.com/posts/${route.params.id}/comments/?limit=2`
    )

    post.value = dataPost
    comments.value = dataComments
  } catch (e) {}
}

onMounted(() => {
  fetch()
})
</script>
