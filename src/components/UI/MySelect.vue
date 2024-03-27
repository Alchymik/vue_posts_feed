<template>
    <select @change="changeSelectedOption">
        <option disabled selected>Выберите из списка</option>
        <option v-for="option in options" :key="option.key" :value="option.key">{{ option.value }}</option>
    </select>
</template>

<script>
export default {
    name: "my-select",
    props: {
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeSelectedOption(event) {
            this.$emit('update', event.target.value);
        }
    }
}
</script>

<style scoped>
select {
    padding: 15px;
    border: 2px solid mediumslateblue;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    color: mediumslateblue;
}
</style>