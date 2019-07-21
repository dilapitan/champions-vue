<template>
  <div id="app">
    <NavBar />
    
    <div class="ui container">
      <br><br>
      <div class="ui secondary vertical pointing huge menu">
        <router-link v-for="item in items" :key="item.name" :to="item.link" exact>
          <div class="item">{{ item.name }}</div>
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
  color: #42b883 !important;
  border-right: 2px solid #42b883 !important;
}

</style>



