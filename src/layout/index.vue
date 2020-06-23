<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu
                class="ant-menu--navbar"
                theme="dark"
                mode="horizontal"
                :default-selected-keys="['2']"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1">
                    <span  v-waves>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                <span  v-waves>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                <span  v-waves>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-header>
    <a-layout>
    <a-layout-sider width="200" style="background: #fff">
            <a-menu
            class="ant-menu--sidebar"
            theme="dark"
            mode="inline"
            :default-selected-keys="['0']"
            :default-open-keys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
            >
            <a-menu-item key="0" v-waves>
                <a-icon type="dashboard" />
                Dashboard
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="user" />subnav 1</span>
                <a-menu-item key="1" v-waves>
                option1
                </a-menu-item>
                <a-menu-item key="2" v-waves>
                option2
                </a-menu-item>
                <a-menu-item key="3" v-waves>
                option3
                </a-menu-item>
                <a-menu-item key="4" v-waves>
                option4
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="laptop" />subnav 2</span>
                <a-menu-item key="5" v-waves>
                option5
                </a-menu-item>
                <a-menu-item key="6" v-waves>
                option6
                </a-menu-item>
                <a-menu-item key="7" v-waves>
                option7
                </a-menu-item>
                <a-menu-item key="8" v-waves>
                option8
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <span slot="title"><a-icon type="notification" />subnav 3</span>
                <a-menu-item key="9" v-waves>
                option9
                </a-menu-item>
                <a-menu-item key="10" v-waves>
                option10
                </a-menu-item>
                <a-menu-item key="11" v-waves>
                option11
                </a-menu-item>
                <a-menu-item key="12" v-waves>
                option12
                </a-menu-item>
            </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
            <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
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
export default {
    name: 'Dashboard',
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>

<style lang="scss">
#components-layout-demo-top-side-2 {
    height: 100vh;
}
#components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
}
// .ant-menu.ant-menu-dark .ant-menu-item-selected, 
// .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {}

.ant-menu--navbar {
    display: flex;
    align-items: center;
    height: 64px;
}

.ant-menu-item{
    margin-left: 12px !important;
    margin-right: 12px !important;
    width: auto !important;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    margin: 8px 4px ;
    border-radius: 4px;
    &.ant-menu-item-selected {
        border-bottom-color:#00acc1 !important;
    }

}
</style>