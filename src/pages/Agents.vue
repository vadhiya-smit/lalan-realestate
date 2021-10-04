<template>
<fragment>

    <Hero url="/assets/images/page-titles/1.jpg" title="Agents" :breadcrumb="['Home','Agents']" />

    <AgentsWrapper :agents="agents" />

    <Cta />
    
    <script type="Application/javascript" defer src="/assets/js/functions.js"></script> 
</fragment>
</template>

<script>
import AgentsWrapper from '../components/Agents/AgentsWrapper.vue'
import Cta from '../components/Cta.vue'
import Hero from '../components/Hero.vue'
import {agents} from '../services/data'

export default {
  components: { Hero, AgentsWrapper, Cta },
  data(){
      return {
          agents : agents
      }
  },
}
</script>

<style>

</style>