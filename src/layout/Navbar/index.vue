<template>
    <div class="navbar">
        <dva-navlist></dva-navlist>
    </div>
</template>

<script>
import Navlist from './NavList.vue';
export default {
    name: 'Navbar',
    components: {
        'dva-navlist': Navlist
    }
}
</script>