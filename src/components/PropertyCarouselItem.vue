<template>
     <fragment>
        <div class="property--img">
            <img :src="item.src" alt="property image" class="img-responsive">
            <span class="property--status">{{item.status}}</span>
        </div>
        <div class="property--content">
            <div class="property--info">
                <h5 class="property--title"><router-link :to="'/property/'+item.id">{{item.title}} </router-link></h5>
                <p class="property--location">{{item.location}}</p>
                <p class="property--price">${{item.price}}<span class="time" v-if="item.duration">{{item.duration}}</span></p>
            </div>
            <!-- .property-info end -->
            <div class="property--features" v-if="isDesc">
                <ul class="list-unstyled mb-0">
                    <li><span class="feature">Beds:</span><span class="feature-num">{{item.features.beds}}</span></li>
                    <li><span class="feature">Baths:</span><span class="feature-num">{{item.features.baths}}</span></li>
                    <li><span class="feature">Area:</span><span class="feature-num">{{item.features.area}}</span></li>
                </ul>
            </div>
            <!-- .property-features end -->
        </div>
     </fragment>
</template>

<script>
export default {
    props : ['item','isDesc'],
}
</script>

<style>

</style>