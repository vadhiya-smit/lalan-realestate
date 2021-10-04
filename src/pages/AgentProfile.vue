<template>
<fragment>

    <Hero url="/assets/images/page-titles/1.jpg" title="Agent Profile" :breadcrumb="['Home','Agent Profile']" />



<!-- agent-profile 
============================================= -->
<section id="agent-profile" class="agent-profile bg-white">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-5 col-md-5">
                <div class="agent--profile-img">
                    <img src="/assets/images/agents/single/1.jpg" alt="agent" />
                </div>
            </div>
            <!-- .col-md-5 end -->
            <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                <div class="agent--profile-content">
                    <div class="agent--info">
                        <h5 class="agent--title">Steve Martin</h5>
                        <p class="agent--position">Buying Agent</p>
                    </div>
                    <!-- .agent-info end -->
                    <div class="agent--profile-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit.</p>
                    </div>
                    <!-- .agent-profile-details end -->
                    <div class="agent--profile-contact">
                        <ul class="list-unstyled mb-20 clearfix">
                            <li><span>Phone:</span>(950) 491-570-180</li>
                            <li><span>Email:</span><a href="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="592a2c2929362b2d193c21383429353c773a3634">[email&#160;protected]</a></li>
                            <li><span>Mobile:</span>(+20) 220-145-6330</li>
                            <li><span>Website:</span>modernhouse.com</li>
                            <li><span>Fax:</span>(+44) 161-430-1620</li>
                        </ul>
                    </div>
                    <!-- .agent-profile-contact end -->
                    <div class="agent--social-links">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                    </div>
                    <!-- .agent-social-links end -->
                </div>
            </div>
            <!-- .col-md-5 end -->
        </div>
        <!-- .row end -->
    </div>
    <!-- .container -->
</section>
<!-- #agent-profile  end  -->

<!-- properties-carousel -->
    <PropertyCarousel :properties="properties" title="My Properties" />
<!-- #properties-carousel  end  -->

<!-- Contact #2 -->
    <ContactForm />
<!-- #contact2  end -->

    <Cta />

    <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
  </fragment>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import Cta from '../components/Cta.vue'
import Hero from '../components/Hero.vue'
import PropertyCarousel from '../components/Home/PropertyCarousel.vue'
import {property} from '../services/data'
export default {
  components: { Cta, Hero, PropertyCarousel, ContactForm },
    data(){
        return {
           properties : property 
        }
    }
}
</script>

<style>

</style>