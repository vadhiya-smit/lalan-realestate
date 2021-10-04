<template>
     <fragment>
        <div class="property--img">
            <a href="#">
                <img :src="item.src" alt="property image" class="img-responsive">
                <span class="property--status">{{item.status}}</span>
            </a>
        </div>
        <div class="property--content">
            <div class="property--info">
                <h5 class="property--title"><a href="#">{{item.title}}</a></h5>
                <p class="property--location">{{item.location}}</p>
                <p class="property--price">${{item.price}}<span class="time">{{item.duration}}</span></p>
            </div>
            <!-- .property-info end -->
            <div class="property--features">
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
    props : ['item'],
}
</script>

<style>

</style>