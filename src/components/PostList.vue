<template>
  <div v-if="posts.length > 0">
    <h3>Список постов:</h3>
    <transition-group name="post-list">
      <post-item @remove="$emit('remove', post)" v-for="post in posts" :post="post" :key="post.id"></post-item>
    </transition-group>
  </div>
  <div v-else>
    <h3>Список постов пуст</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem"

export default {
  components: {
    PostItem
  },

  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 15px;
  font-family: Arial, Helvetica, sans-serif
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.15s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(120px);
}

.post-list-move {
  transition: transform 0.3s ease;
}
</style>