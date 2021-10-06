<template>
    <fragment>
        <div class="widget--title">
            <h5>{{item.title}}</h5>
        </div>
        <div class="widget--content">
            <ul class="list-unstyled mb-0">
                <li v-for="item of item.items" :key="item.id" >
                    <a :href="item.url">{{item.title}} <span>({{item.count}})</span></a>
                </li>
            </ul>
        </div>
    </fragment>
</template>

<script>
export default {
    props : ['item']
}
</script>

<style>

</style>