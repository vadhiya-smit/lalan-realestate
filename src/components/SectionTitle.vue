<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
                <h2 class="heading--title">{{title}}</h2>
                <p class="heading--desc">{{desc}}</p>
            </div>
            <!-- .heading-title end -->
        </div>
        <!-- .col-md-12 end -->
    </div>
</template>

<script>
export default {
    props : ['title', 'desc']
}
</script>

<style>

</style>