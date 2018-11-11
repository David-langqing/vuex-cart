<template>
<div>
    <ul>
        <li v-for="item of cartinfo" :key="item.id">
            {{item.name}}-￥{{item.price}}*{{item.quentitiy}}
        </li>
    </ul>
    <div>总价：{{carttotal}}</div>
</div>
</template>
<script>
import {mapState,mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters('cart',["cartinfo","carttotal"])
    }
}
</script>

