<template>
  <fragment>
       <!-- map
============================================ -->
        <section id="map" class="hero-map pt-0 pb-0">
            <div class="container-fluid pr-0 pl-0">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div id="googleMap"></div>
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container end -->
            <div class="search-properties">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <form class="mb-0 " @submit.prevent="submitForm">
                                <div class="form-box ">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-location" id="select-location" v-model="filter.location">
                                                        <option value="">Any Location</option>
                                                        <option :value="location.location" v-for="location of searchFields.locations" :key="location.id" >{{location.location}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-type" id="select-type" v-model="filter.type">
                                                        <option value="">Any Type</option>
                                                        <option :value="type.type" v-for="type of searchFields.types" :key="type.id" >{{type.type}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-status" id="select-status" v-model="filter.status">
                                                        <option value="">Any Status</option>
                                                        <option :value="st.status" v-for="st of searchFields.status" :key="st.id" >{{st.status}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <input type="submit" value="Search" name="submit" class="btn btn--primary btn--block mb-30">
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3 option-hide">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-beds" id="select-beds" v-model="filter.beds">
                                                        <option value="">Beds</option>
                                                        <option :value="bed.bed" v-for="bed of searchFields.beds" :key="bed.id" >{{bed.bed}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3 option-hide">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-baths" id="select-baths" v-model="filter.baths">
                                                        <option value="">Baths</option>
                                                        <option :value="bath.bath" v-for="bath of searchFields.baths" :key="bath.id" >{{bath.bath}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-6 option-hide">
                                            <div class="filter mb-30">
                                                <p>
                                                    <label for="amount">Price Range: </label>
                                                    <input id="amount" type="text" class="amount" v-model="filter.range"  readonly>
                                                </p>
                                                <div class="slider-range"></div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-12 col-md-12">
                                            <a href="#" class="less--options">Less options</a>
                                        </div>
                                    </div>
                                    <!-- .row end -->
                                </div>
                                <!-- .form-box end -->
                            </form>
                        </div>
                        <!-- .col-md-12 end -->
                    </div>
                    <!-- .row end -->
                </div>
                <!-- .container end -->
            </div>
        </section>
        <!-- #map end -->

        <!-- properties-grid
============================================= -->
        <section id="properties-grid">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <!-- widget property type
=============================-->
                        <div class="widget widget-property" v-for="widget in widgets" :key="widget.id"  >
                            <property-widget :item="widget" />
                        </div>
                        <!-- . widget property city end -->


                        <!-- widget featured property
=============================-->
<FeaturedProperty />

                        
                        <!-- . widget featured property end -->
                    </div>
                    <!-- .col-md-4 end -->
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="properties-filter clearfix">
                                    <div class="select--box pull-left">
                                        <label>Sort by:</label>
                                        <i class="fa fa-angle-up"></i>
                                        <i class="fa fa-angle-down"></i>
                                        <select>
                                            <option selected="" value="Default">Default Sorting</option>
                                            <option value="Larger">Newest Items</option>
                                            <option value="Larger">oldest Items</option>
                                            <option value="Larger">Hot Items</option>
                                            <option value="Small">Highest Price</option>
                                            <option value="Medium">Lowest Price</option>
                                        </select>
                                    </div>
                                    <!-- .select-box -->
                                    <div class="view--type pull-right">
                                        <a id="switch-list" href="#" class=""><i class="fa fa-th-list"></i></a>
                                        <a id="switch-grid" href="#" class="active"><i class="fa fa-th-large"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="properties properties-grid">
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-6 col-md-6"  v-for="property of properties" :key="property.id">
                                    <!-- .property-item #1 -->
                                     <div class="property-item">
                                        <PropertyCarouselItem :item="property" :isDesc="true" />
                                    </div>
                                    
                                </div>
                                <!-- .property item end -->

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-50">
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
                            <!-- .col-md-12 end -->
                        </div>
                        <!-- .row -->
                    </div>
                    <!-- .col-md-8 end -->
                </div>
                <!-- .row -->
            </div>
            <!-- .container -->
        </section>
        <!-- #properties-grid  end  -->
        <Cta />
        <script type="Application/javascript" defer src="/assets/js/functions.js"></script>
        <script type="Application/javascript" defer src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>

        <!-- <script type="Application/javascript" defer src="https://maps.google.com/maps/api/js"></script> -->
        <script type="Application/javascript" defer src="/assets/js/plugins/jquery.gmap.min.js"></script>
        <script type="Application/javascript" defer src="/assets/js/map-addresses.js"></script>
        <script type="Application/javascript" defer src="/assets/js/map-custom.js"></script>
  </fragment>
</template>

<script>
import Cta from '../components/Cta.vue'
import PropertyCarouselItem from '../components/PropertyCarouselItem.vue'
import PropertyWidget from '../components/Property/PropertyWidget.vue'
import FeaturedProperty from '../components/FeaturedProperty.vue'
export default {
    components: { Cta, PropertyWidget, PropertyCarouselItem, FeaturedProperty },
    data(){
        return {
            searchFields : {
                cities : [],
                types : [],
                status : [],
                beds : [],
                baths : [],
            },
            filter : {
                location : '',
                type : '',
                status : '',
                beds : '',
                baths : '',
                range : ''
            },
            widgets : [
                {
                    id:1,
                    title : "Property Type",
                    items : [
                        {id : 1,count : "13",title : 'Apartments',url : "Apartments",},
                        {id : 2,count : "8",title : 'Houses',url : "Houses",},
                        {id : 3,count : "3",title : 'Offices',url : "Offices",},
                        {id : 4,count : "4",title : 'Villas',url : "Villas",},
                        {id : 5,count : "2",title : 'Land',url : "Land",},
                        
                    ]
                },

                {
                    id:2,
                    title : "Property Status",
                    items : [
                        {id : 1,count : "25",title : 'For Rent',url : "Apartments",},
                        {id : 2,count : "32",title : 'For Sale',url : "Houses",},
                    ]
                },

                {
                    id:3,
                    title : "location",
                    items : [
                        {id : 1,count : "5",title : 'London',url : "Apartments",},
                        {id : 2,count : "10",title : 'Sydney',url : "Houses",},
                        {id : 3,count : "4",title : 'New York',url : "Offices",},
                        {id : 4,count : "7",title : 'Paris',url : "Villas",},
                        
                    ]
                },
            ],
            properties : []

        }
    },
    watch : {
        '$route': {
            handler: function() {
                console.log("route")
            },
        deep: true,
        immediate: true
      }
    },
    mounted(){
        window.scrollTo(0, 200)
    },
    created(){
        this.searchFields = this.$store.state.searchFields
        console.log(this.$route.query);
        this.filter = {...this.filter,...this.$route.query}
        this.properties = this.$store.state.property
        
    },
    methods:{
        submitForm(){
            this.$router.replace({path : '/property', query : {...this.filter}})
        },
        scrollToFun(){
            window.scrollY(200)
        }
    },
    
}
</script>

<style>

</style>