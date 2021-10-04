<template>
  <section id="properties-carousel" class="properties-carousel pt-90 pb-90">
            <div class="container">
                <SectionTitle 
                    :title="title" 
                    :desc="desc" 
                />

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="carousel carousel-dots" data-slide="3" data-slide-rs="2" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
                            <div class="property-item" v-for="item of properties" :key="item.title" >
                                <FeatureProperty :item="item" />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import FeatureProperty from '../FeatureProperty.vue'
import SectionTitle from '../SectionTitle.vue'

export default {
  components: { SectionTitle, FeatureProperty },
  props:['properties','title','desc'],
  
}
</script>

<style>

</style>