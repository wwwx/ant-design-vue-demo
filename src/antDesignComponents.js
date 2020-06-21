import Vue from 'vue';
import Form from 'ant-design-vue/lib/form';
import Button from 'ant-design-vue/lib/button';
import Input from 'ant-design-vue/lib/input';
import Icon from 'ant-design-vue/lib/icon';
import 'ant-design-vue/lib/form/style/css';
import 'ant-design-vue/lib/button/style/css';
import 'ant-design-vue/lib/input/style/css';
import 'ant-design-vue/lib/icon/style/css';

Vue.use(Form);
Vue.prototype.$form = Form;

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const antDesignComponents = {
  install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Icon.name, Icon);
  },
};

export default antDesignComponents;
