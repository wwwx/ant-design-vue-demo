<template>
  <div>
    <button>Test Button</button>
  </div>
</template>
<script>
export default {
  name: 'button',
};
</script>
<style scoped>
button {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #666;
  color: #fff;
}
button:hover {
  background: #999;
}
button:active {
  position: relative;
  top: 1px;
}
</style>

