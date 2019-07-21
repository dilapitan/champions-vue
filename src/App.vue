<template>
  <div id="app">
    <NavBar />
    
    <div class="ui container">
      <br><br>
      <div class="ui secondary vertical pointing huge menu">
        <a href="" class="active green item">
          Demacia
        </a>
        <a href="" class="item">
          Noxus
        </a>
        <a href="" class="item">
          About
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: "App",
  components: {
    NavBar
  }  
}
</script>

