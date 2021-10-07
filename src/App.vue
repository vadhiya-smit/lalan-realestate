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
//import UserServices from './services/UserServices'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  mounted(){
    this.ret()
  },
  methods : {
      async ret(){
        //const res = await UserServices.getUsers()
        //console.log(localStorage.setItem('userToken',res.data));
    }
  }
}
</script>


<style>

</style>
