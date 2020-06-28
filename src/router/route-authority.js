export default {
    path: 'authority',
    meta: {
      title: 'Authority Management'
    },
    components: {
      aside: () => import('@/layout/sidebar/AuthoritySideMenu.vue'),
      main: {
        render: (h) => h('router-view')
      }
    },
    children: [
      {
        path: '',
        redirect: 'function',
      },
      {
        path: 'function',
        name: 'function',
        component: () => import(/* webpackChunkName: "function" */ '@/views/authority/FunctionManage')
      },
      {
        path: 'operator',
        name: 'operator',
        component: () => import(/* webpackChunkName: "operator-manage" */ '@/views/authority/OperatorManage')
      }
    ]
  }