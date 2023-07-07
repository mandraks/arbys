<template>
  <div :class="`bg-white ${classs} px-2 pb-10 pt-14 card-shadow mb-5`">
    <nuxt-link :to="`/products/${product.slug}`">
      <img :src="product.image" :alt="product.name" class="w-full" />
      <h3
        class="
          text-4xl
          md:text-2xl
          lg:text-3xl
          text-black text-center
          font-league-gothic-regular
          uppercase
        "
      >
        {{ product.name }}
      </h3>

      <template v-if="product.nutrations">
        <p
          class="text-gray-500 text-center"
          v-for="(n, i) in product.nutrations"
          :key="i"
        >
          <span
            class="inline-block mr-2"
            v-for="key in Object.keys(n)"
            :key="key"
            >{{ n[key] }} {{ key }}</span
          >
        </p>
      </template>
      <p v-else class="text-gray-500 text-center">
        {{ product.calories }} Calorías
      </p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["product", "classs"],
};
</script>
<style scoped>
</style>
