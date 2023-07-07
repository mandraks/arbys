<template>
  <Layout>
    <div class="mt-10 container flex-1 justify-center px-10">
      <ul class="flex">
        <li class="mr-2">
          <nuxt-link
            to="/menu"
            class="uppercase font-helvetica text-sm font-bold underline"
            >Menú de Niños</nuxt-link
          >
        </li>
        <li class="text-gray-500 font-bold text-xs relative top-1">/</li>
      </ul>
    </div>
    <div
      class="mt-5 container px-10"
      v-for="(category, i) in categories"
      :key="i"
    >
      <h1 class="uppercase font-rockwell-bold lg:text-5xl text-2xl">
        {{ category.title }}
        <span v-if="category.subtitle" class="font-league-gothic">{{
          category.subtitle
        }}</span>
      </h1>

      <div class="grid grid-cols-1
            lg:grid-cols-6
            md:grid-cols-4
            sm:grid-cols-2
            sm:gap-4
            relative
            z-10
            pt-10">
        <ProductCard
          v-for="product in category.products"
          :key="product.name"
          :product="product"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import { menuDeNinos } from '../store/data'
export default {
  data() {
    return {
      categories: menuDeNinos,
    };
  },
};
</script>

