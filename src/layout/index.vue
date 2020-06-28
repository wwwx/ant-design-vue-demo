<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header>
            <dva-logo />
            <dva-navbar />
        </a-layout-header>
        <a-layout>
            <a-layout-sider>
                <router-view name="aside"></router-view>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <dva-breadcrumb />
                <a-layout-content
                    :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
                >
                    <router-view name="main"></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import Navbar from './Navbar/index.vue';
import Logo from './Logo/index.vue';
import Breadcrumb from './Breadcrumb'
export default {
    name: 'Dashboard',
    components: {
        'dva-navbar': Navbar,
        'dva-logo': Logo,
        'dva-breadcrumb': Breadcrumb,
    },
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>