<template>
    <div class="app_buttons">
        <my-button class="post_create_button" @click="$store.commit('setShowFlag', true)">Создать пост</my-button>
        <my-input class="post_search_button" v-focus :modelValue="$store.state.postModule.searchInput"
            @update="updateInput" placeholder="Поиск по содержимому"></my-input>
        <my-select :options="$store.state.postModule.sortOptions" @update="updateSelectedSortOption"></my-select>
    </div>
    <my-dialog :showFlag="$store.state.showFlag" @update="updateShowFlag">
        <post-form @create="pushPost"></post-form>
    </my-dialog>
    <post-list v-if="!$store.state.postModule.isLoading" @remove="removePost"
        :posts="$store.getters['postModule/sortedAndSearchedPosts']"></post-list>
    <div v-else class="loading_header">
        <h3>Идёт загрузка...</h3>
    </div>
    <div v-if="$store.state.postModule.page > 0" v-intersection="() => $store.dispatch('postModule/loadMorePosts')"
        class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"

export default {
    components: {
        PostForm, PostList
    },

    methods: {
        updateSelectedSortOption(value) {
            this.$store.commit('postModule/setSelectedSortOption', value)
        },

        updateShowFlag(value) {
            this.$store.commit('setShowFlag', value)
        },

        updateInput(value) {
            this.$store.commit('postModule/setSearchInput', value)
        },

        pushPost(post) {
            this.$store.commit('postModule/setPosts', [...this.$store.state.postModule.posts, ...[post]]);
            this.$store.commit('setShowFlag', false);
        },

        removePost(post) {
            this.$store.commit('postModule/setPosts', this.$store.state.postModule.posts.filter(elem => elem.id != post.id))
        },
    },

    mounted() {
        this.$store.dispatch('postModule/loadMorePosts');
    },
}
</script>

<style>
.app_buttons {
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

.loading_header {
    margin: 15px;
    font-family: Arial, Helvetica, sans-serif
}

.post_search_button {
    min-width: 600px;
}

.observer {
    width: 100%;
    height: 15px;
}
</style>