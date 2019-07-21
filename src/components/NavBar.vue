<template>
  <div class="ui inverted menu">
    <a 
      href="https://vuejs.org/"
      class="item"
      target="_blank"
    >
      <img src="@/assets/logo.png" >
    </a>
    <a class="item">
      <span>CHAMPIONS</span>
      <span id="vue-header">VUE</span>
    </a>
    <a  
      href="https://github.com/dilapitan/champions-vue"
      class="item right floated"
      target="_blank"
    >
      <i class="large icons green github icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

style <style scoped>
  #vue-header {
    color: #42b883;
    font-weight: 700;
  }
</style>
