import { createStore } from "vuex";
import postModule from "@/store/postModule"

export default createStore({
    state: () => ({
        showFlag: false,
    }),
    mutations: {
        setShowFlag(state, showFlag) {
            state.showFlag = showFlag
        },
    },
    modules: {
        postModule: postModule
    },
    strict: true,
})