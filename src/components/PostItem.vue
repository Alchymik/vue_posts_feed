<template>
    <div class="post">
        <div class="post_body">
            <div><strong>{{ post.title }}:</strong><br /></div>
            <div>{{ post.filling }}</div>
        </div>
        <div class="post_buttons">
            <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
            <my-button @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.post {
    margin: 15px;
    padding: 15px;
    border: 2px solid mediumslateblue;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: space-between;
}

.post_body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.post_buttons {
    display: flex;
    justify-content: space-between;
}

.post_buttons>* {
    margin-left: 5px;
}
</style>