<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style scoped>
button {
    background-color: white;
    padding: 15px;
    border: 2px solid mediumslateblue;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    color: mediumslateblue;
    transition: 0.15s;
}

button:hover {
    transition: 0.15s;
    background-color: mediumslateblue;
    color: white;
}
</style>