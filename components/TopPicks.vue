<template>
  <div class="relative">
    <div class="absolute top-0 left-0 lg:w-3/5 w-4/5 px-8 xl:py-24 py-20 bg-primary">
      <h3 class="text-white text-4xl font-league-gothic uppercase">Los combos</h3>
      <h2 class="text-white lg:text-3xl text-4xl font-rockwell-bold font-bold uppercase">Favoritos</h2>
    </div>
      <div class="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 sm:gap-4 relative z-10 lg:pt-10 pt-52">
        <ProductCard
          v-for="(product,index) in products"
          :key="product.name"
          :product="product"
          :classs="index === 0? 'md:col-start-2': ''"
        />
      </div>
  </div>
</template>
<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          name: "Double Beef and cheddar",
          slug: "double-beef-n-cheddar",
          calories: 1250,
          image: require("~/assets/images/double-beef-n-cheddar.jpg"),
        },
        {
          name: "Chicken Bacon Swiss Sandwich ",
          slug: "chicken-bacon-swiss",
          calories: 1230,
          image: require("~/assets/images/chicken-bacon-swiss-sandwich.jpg"),
        },
        {
          name: "pulled pork",
          slug: "pulled-pork",
          calories: 1180,
          image: require("~/assets/images/pulled-pork.jpg"),
        },
        {
          name: "Triple Cheese Turkey BLT",
          slug: "triple-cheese-turkey-blt",
          calories: 810,
          image: require("~/assets/images/triple-cheese-turkey-blt.jpg"),
        },
        {
          name: "Smokehouse Brisket",
          slug: 'smokehouse-beef-brisket',
          calories: 980,
          image: require("~/assets/images/smokehouse-brisket.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>
