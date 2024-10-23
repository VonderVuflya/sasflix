<template>
  <template v-for="publicate in publications" :key="'comment-' + publicate.id">
    <div class="publicate">
      <div class="content">
        <Text type="h1">{{ publicate.title }}</Text>
        <Text type="body">{{ publicate.body }}</Text>
      </div>

      <div class="info-block">
        <div class="reactions">
          <button v-on:click="handleLike">
            <Text type="caption">Like</Text>
            <Text type="number-tab">{{ publicate.likes }}</Text>
          </button>
          <button v-on:click="handleDislike">
            <Text type="caption">Trash</Text>
            <Text type="number-tab">{{ publicate.dislike }}</Text>
          </button>
        </div>

        <button class="comment-button">
          <Text type="caption" color="primary">Open comments</Text>
        </button>

        <Text type="caption" color="ghost">
          {{ $dayjs(publicate.createdAt).format('DD-MM-YYYY') }}
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
const publications = [
  {
    id: '1',
    title: 'His mother had always taught him',
    body: 'His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
    likes: 192,
    dislike: 25,
    createdAt: new Date().toString(),
    tags: ['history','american', 'crime']
  },
  {
    id: '2',
    title: 'His mother had always taught him',
    body: 'His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
    likes: 192,
    dislike: 25,
    liked: true,
    disliked: false,
    createdAt: new Date().toString(),
    tags: ['history','american', 'crime']
  }
]

const handleLike = () => {}
const handleDislike = () => {}
</script>