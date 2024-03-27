<template>
    <input :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update', event.target.value);
        }
    }
}
</script>

<style scoped>
input {
    padding: 15px;
    border: 2px solid mediumslateblue;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    color: mediumslateblue;
}
</style>