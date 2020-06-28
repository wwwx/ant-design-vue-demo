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
            <span slot="title"><a-icon type="user" />Line</span>
            <a-menu-item key="1" v-waves>
            <router-link to="/home/params/line/agm">agm</router-link> 
            </a-menu-item>
            <a-menu-item key="2" v-waves>
            <router-link to="/home/params/line/bom">bom </router-link>
            </a-menu-item>
            <a-menu-item key="3" v-waves>
            <router-link to="/home/params/line/tvm">tvm </router-link>
            </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="user" />Version</span>
            <a-menu-item key="4" v-waves>
            <router-link to="/home/params/version/manage">version manage</router-link> 
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>