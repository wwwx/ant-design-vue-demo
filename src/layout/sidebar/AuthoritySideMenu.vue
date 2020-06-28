<template>
    <a-menu
        class="ant-menu--sidebar"
        theme="dark"
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
        >
        <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />Authority</span>
            <a-menu-item key="1" v-waves>
            <router-link to="/home/authority/function">Fuction</router-link> 
            </a-menu-item>
            <a-menu-item key="2" v-waves>
            <router-link to="/home/authority/operator">Operator </router-link>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>