<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ZhiMaXinYong/>
  </div>
</template>

<script>
import ZhiMaXinYong from './components/ZhiMaXinYong';

export default {
  name: 'App',
  components: {
    ZhiMaXinYong,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
