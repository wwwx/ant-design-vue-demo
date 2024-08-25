<template>
  <div id="app">
    <h1>@czhw/demo-component-vue2</h1>
    <hr />
    <hw-button></hw-button>
  </div>
</template>
<script>
import HwButton from './packages/button/index.vue';
export default {
  components: { HwButton },
};
</script>

