<template>
    <div class="main_text">
        <h1>Функционал:</h1>
        <ul>
            <li>Постраничная навигация (Single-page application)</li>
            <li>Управление состоянием приложения (VueX)</li>
            <li>Получение постов с сервера (Axios)</li>
            <li>Сортировка постов по разным полям</li>
            <li>Создание нового поста</li>
            <li>Переход на страницу поста (Динамическая навигация)</li>
            <li>Удаление постов</li>
            <li>Поиск постов по содержимому</li>
            <li>Динамическая подгрузка постов (Intersection API)</li>
        </ul>
    </div>
</template>

<script></script>

<style scoped>
    .main_text {
        margin: 15px;
    }
    h1 {
        margin: 15px;
    }

    li {
        list-style: none;
        margin: 15px;
        padding: 15px;
        border: 2px solid mediumslateblue;
        border-radius: 15px;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: space-between;
    }
</style>