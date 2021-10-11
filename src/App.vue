<template>
  <div id="wrapper" class="wrapper clearfix">
    <Navbar />
        <router-view></router-view>
    <Footer />
    

  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import UserServices from './services/UserServices'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  created(){
    this.ret()
    },
  methods : {
    async ret(){
      //const res = await UserServices.getUsers()
      /* localStorage.setItem('userToken',res.data.token) */
      const token = localStorage.getItem('userToken')
      if(token){
        const res2 = await UserServices.getUserFromToken(token)
        console.log(res2.data);
        this.$store.commit('setUser',res2.data)
        //this.$store.commit('setUserRole',res2.data.role)
      }
      
    }
  }
}
</script>


<style>

</style>
