<template>
    <div>
        <h1>這是前台頁面</h1>        
    </div>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>  |
    <RouterLink to="/products">產品列表</RouterLink>  |
    <RouterLink to="/cart">購物車</RouterLink> 
    <hr>
    <RouterView></RouterView>
</template>
<script>
import { RouterView } from 'vue-router';
export default {
    components : {
        RouterView
    }
}
</script>