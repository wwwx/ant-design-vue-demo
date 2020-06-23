<template>
  <div class="page-dashboard">
    <dva-layout></dva-layout>
  </div>
</template>

<script>
import Layout from '@/layout';
export default {
    name: 'Dashboard',
    components: {
      'dva-layout': Layout,
    }
}
</script>
