<template>
  <div id="app">
   <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  transition: All 0.3s
}
</style>
