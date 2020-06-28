export default {
    path: 'params',
    meta: {
      title: 'Params Management'
    },
    components: {
      aside: () => import('@/layout/sidebar/ParamsSideMenu.vue'),
      main: {
        render: (h) => h('router-view')
      }
    },
    children: [
      {
        path: '',
        redirect: 'line/agm',
      },
      {
        path: 'line/agm',
        name: 'line/agm',
        component: () => import(/* webpackChunkName: "agm" */ '@/views/params/line/Agm')
      },
      {
        path: 'line/bom',
        name: 'line/bom',
        component: () => import(/* webpackChunkName: "bom" */ '@/views/params/line/Bom')
      },
      {
        path: 'line/tvm',
        name: 'line/tvm',
        component: () => import(/* webpackChunkName: "tvm" */ '@/views/params/line/Tvm')
      },
      {
        path: 'version/manage',
        name: 'version/manage',
        component: () => import(/* webpackChunkName: "version-manage" */ '@/views/params/version/VersionManage')
      },
    ]
  }