<template>
  <fragment>             
    <div class="property-item" v-for="property of properties" :key="property._id">
      <div class="property--img">
        <a href="#">
          <img :src="property.gallery[0]" alt="property image" class="img-responsive">
          <span class="property--status">{{property.description.status}}</span>
        </a>
        </div>
          <div class="property--content">
            <div class="property--info">
                <h5 class="property--title"><a href="#">{{property.title}}</a></h5>
                <p class="property--location">{{property.location}}</p>
                <p class="property--price">${{property.price}}</p>
            </div>
            <!-- .property-info end -->
            <div class="property--features">
                <ul>
                    <li><span class="feature">Beds:</span><span class="feature-num">{{property.description.beds}}</span></li>
                    <li><span class="feature">Baths:</span><span class="feature-num">{{property.description.baths}}</span></li>
                    <li><span class="feature">Area:</span><span class="feature-num">{{property.description.area}} sq ft</span></li>
                    <li class="pull-right"><a href="#" class="edit--btn" @click="edit(property._id)"><i class="fa fa-edit"></i>Edit</a></li>

                </ul>
                
            </div>
            <!-- .property-features end -->
        </div>
      </div>
        <!-- .property item end -->

        <!-- .property item end -->
        <div class="mt-50 text--center">
            <ul class="pagination">
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">...</a></li>
                <li>
                    <a href="#" aria-label="Next">
            <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
        </a>
                </li>
            </ul>
        </div>
  </fragment>
</template>

<script>
export default {
  data(){
      return {
          properties : []
      }
  },
  created(){
    this.properties = this.$store.state.property
    const data  = this.$store.state.user
    this.properties = this.properties.filter(item => item.agentId == data._id)
  },
  methods:{
    edit(id){
      this.$router.push(`/add-property/${id}`)
    } 
  }
}
</script>

<style>

</style>