export default {
    props: {
        showFlag: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideShowedByFlag() {
            this.$emit('update', false)
        }
    },
}