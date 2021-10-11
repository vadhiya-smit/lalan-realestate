<template>
  <fragment>

    <Hero url="/assets/images/page-titles/1.jpg" title="user Profile" :breadcrumb="['Home','user Profile']" />
    
        <section id="user-profile" class="user-profile">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="edit--profile-area">
                            <ul class="edit--profile-links list-unstyled mb-0">
                                <li><router-link to="/profile" class="active">Edit Profile</router-link></li>
                                <li><router-link to="/profile/social">Social Profiles</router-link></li>
                                <li><router-link to="/profile/properties">My Properties</router-link></li>
                                <li><router-link to="/profile/favorite-property">Favorite Properties</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <!-- .col-md-4 -->
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <router-view></router-view>
                    </div>
                    <!-- .col-md-8 end -->
                </div>
                <!-- .row end -->
            </div>
        </section>
        <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
  </fragment>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
  components: { Hero },
    data(){
        return { 
            
            data : this.$store.state,
            form : {
                contact: {
                    phone: "",
                    mobile: "",
                    website: "",
                    fax: "",
                    taxNumber: "",
                    languages: [],
                },
                gallery: { profile: "" },
                socialLinks: { facebook: "#", twitter: "#", googlePlus: "#", pinterest: "#" },
                _id: "61602503a3edf2a2fe036e95",
                title: "",
                email: "",
                desc:
                    "",
                isActive: "",
                role: 3,

            }
        }
    },    
    mounted(){
        setTimeout(()=>{
            const user = this.$store.state.user
            
            this.form = {...this.form, ...user,firstName : user.fullName.split(' ')[0],lastName : user.fullName.split(' ')[1] }
        },100)
    }
}
</script>

<style>

</style>