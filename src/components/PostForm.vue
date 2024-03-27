<template>
    <form class="new-post-form" @submit.prevent>
        <h3>Создание поста</h3>
        <my-input v-focus :modelValue="post.title" @update="updateTitle" type="text" placeholder="Название" />
        <my-input :modelValue="post.filling" @update="updateFilling" type="text" placeholder="Описание поста" />
        <my-button @click="createNewPost">Добавить пост</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                filling: '',
            },
        }
    },
    methods: {
        createNewPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                filling: '',
            }
        },

        updateTitle(value) {
            this.post.title = value;
        },

        updateFilling(value) {
            this.post.filling = value;
        }
    },
}
</script>

<style scoped>
h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
}

.new-post-form {
    margin: 15px;
    display: flex;
    flex-direction: column;
}

.new-post-form>* {
    margin-top: 15px;
}

.new-post-form>button {
    align-self: flex-end;
}
</style>