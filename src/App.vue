<template lang='pug'>
  #app
    nav-bar
    router-view
  //- <div id="app">
  //-   <div id="nav">
  //-     <router-link to="/">Home</router-link> |
  //-     <router-link to="/about">About</router-link>
  //-   </div>
  //-   <router-view/>
  //- </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.purple-bg {
  background-color: #5A4789;
  color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
