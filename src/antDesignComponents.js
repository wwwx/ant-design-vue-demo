
import 'ant-design-vue/lib/form/style/css';
import 'ant-design-vue/lib/button/style/css';
import 'ant-design-vue/lib/input/style/css';
import 'ant-design-vue/lib/icon/style/css';
import 'ant-design-vue/lib/layout/style/css';
import 'ant-design-vue/lib/menu/style/css';
import 'ant-design-vue/lib/breadcrumb/style/css';

import Vue from 'vue';
import { Form, Button, Input, Icon, Layout, Menu, Breadcrumb} from 'ant-design-vue';

Vue.use(Form)
  .use(Button)
  .use(Input)
  .use(Icon)
  .use(Layout)
  .use(Menu)
  .use(Breadcrumb)

Vue.prototype.$form = Form;

