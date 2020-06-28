<template>
    <a-menu
        class="ant-menu--navbar"
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
    >
        <a-menu-item key="1">
            <router-link to="/home/authority">Authority Management</router-link>
        </a-menu-item>
        <a-menu-item key="2">
            <router-link to="/home/params">Params Management</router-link>
        </a-menu-item>
    </a-menu>
</template>