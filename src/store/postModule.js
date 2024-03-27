import axios from 'axios'

export default {
    state: () => ({
        isLoading: true,
        posts: [{
            id: 0,
            title: 'sad',
            filling: 'x_x'
        }],
        selectedSortOption: '',
        searchInput: '',
        sortOptions: [
            { key: "id", value: "По дате" },
            { key: "title", value: "По заголовку" },
            { key: "filling", value: "По содержанию" },
        ],
        page: 0,
        limit: 10,
        totalPages: 0,
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => String(post1[state.selectedSortOption])?.localeCompare(String(post2[state.selectedSortOption])));
        },
        sortedAndSearchedPosts(state, getters) {
            console.log(getters.sortedPosts);
            return getters.sortedPosts.filter((post) => post.filling.toLowerCase().includes(state.searchInput.toLowerCase()));
        }
    },
    mutations: {
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        setSelectedSortOption(state, selectedSortOption) {
            state.selectedSortOption = selectedSortOption
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchInput(state, searchInput) {
            state.searchInput = searchInput
        }
    },
    actions: {
        async loadMorePosts({ state, commit }) {
            try {
                commit('setPage', state.page + 1);
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit,
                        _page: state.page,
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                response.data.forEach(elem => commit('setPosts', [...state.posts, { id: elem.id, title: elem.title, filling: elem.body }]));
            } catch (e) {
                alert(e);
            } finally { 
                commit('setIsLoading', false);
            }
        }
    },
    namespaced: true,
}