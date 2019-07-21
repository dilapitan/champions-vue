<template>
  <div id="app">
    <NavBar />
    
    <div class="ui container">
      <br><br>
      <div class="ui secondary vertical pointing huge menu">
        <router-link to="/">
          <div class="item">
            Demacia
          </div>
        </router-link>
        
        <router-link to="/noxus">
          <div class="item">
            Noxus
          </div>
        </router-link>

        <router-link to="/about">
          <div class="item">
            About
          </div>
        </router-link>
      </div>
    </div>

    <div>
      <router-view></router-view>
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

<style scoped>

.router-link-exact-active div {
  color: #42b883 !important;
  border-right: 2px solid #42b883 !important;
}

</style>



