<template>
    <nav class="nav">
        <div class="nav_logo" @click="$router.push('/')">
            <img src="@/img/main_icon.png">
            <h1 class="nav_logo_text">VUE3DEMO</h1>
        </div>
        <div class="nav_buttons">
            <router-link to="/">Главная</router-link>
            <router-link to="/posts">Посты</router-link>
            <router-link to="/about">О приложении</router-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
    color: white;
    background-color: mediumslateblue;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav_logo {
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav_logo:hover {
    cursor: pointer;
}

.nav_logo>* {
    padding: 5px;
}

.nav_logo_text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
    color: white;
}

.nav_buttons {
    padding: 15px;
}

.nav_buttons>* {
    height: 100%;
    width: fit-content;
    padding: 15px;
}

.nav_buttons>*:hover {
    background-color: slateblue;
    transition: 0.15s;
}

a:link,
a:visited,
a:active,
a:hover {
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    color: white;
    text-decoration: none;
}
</style>