<template>
    <div>
        <ul v-for="item of data" :key="item.id">
            <li>{{item.name}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.price}}

              <button @click="addtocart(item)" :disabled="item.inventory===0">加入购物车</button>
            </li>

        </ul>
    </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("product", ["data"])
  },
  methods: {
    addtocart(item){
      this.$store.dispatch("cart/addtocart",item)
    }
  },
  beforeCreate() {
    this.$store.dispatch("product/getdata");
  }
};
</script>

