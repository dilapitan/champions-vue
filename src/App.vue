<template>
  <div id="app">
    <NavBar />
    
    <br><br>
    <div class="ui container">
      <div class="ui stackable grid">
        <div class="four wide column ui secondary vertical huge menu">
          <router-link v-for="item in items" :key="item.name" :to="item.link" exact>
            <div class="item">{{ item.name }}</div>
          </router-link>
        </div>

        <div class="eleven wide column">
          <router-view></router-view>
        </div>
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
  },
  data () {
    return {
      items: [
        { name: "Demacia", link: "/" },
        { name: "Noxus", link: "/noxus" },
        { name: "About", link: "/about" }
      ]
    }
  }
}
</script>

<style scoped>

.router-link-exact-active div {
  background-color: #42b883 !important;
  color: white !important;
  font-weight: 700 !important;
}
</style>



