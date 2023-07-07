<template>
  <Layout>
    <div class="flex justify-center w-full border-t-2" v-if="product">
      <div class="container py-12 px-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img :src="product.image" :alt="product.name" class="w-full" />
          </div>
          <div class="pt-32">
            <h1 class="font-rockwell-bold text-5xl uppercase">
              {{ product.name }} <span class="font-league-gothic block" v-if="product.subTitle" v-text="product.subTitle"></span>
            </h1>
            <div>
              <ul class="flex w-full mt-5 font-rockwell" v-if="product.type">
                <li
                  class="border-2 border-gray-200 px-5 py-2 uppercase"
                  :class="{
                    'bg-gray-100 border-b-primary': i + 1 === product.type,
                    'border-r-0 border-l-0': i === 1,
                  }"
                  v-for="(type, i) in ['classic', 'double', 'half pound']"
                  :key="type + i"
                >
                  {{ type }}
                </li>
              </ul>

              <template v-if="product.nutrations">
                <p
                  class="text-gray-500 mt-5"
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
              <p v-else class="text-gray-500 mt-5">
                {{ product.calories }} Calorías
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        justify-center
        w-full
        bg-gray-50
        border-t-2 border-warmGray-100
      "
    >
      <div class="container px-3" v-if="product.description">
        <div class="relative">
          <div class="w-10 h-5 bg-primary absolute right-full top-5 mr-3"></div>
          <h2 class="mt-7 font-rockwell-bold text-2xl uppercase">
            sobre el producto
          </h2>
          <p class="font-rockwell mt-1">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { menuDeNinos, menu } from "../../store/data";
export default {
  async asyncData({ params }) {
    const products = [];

    [...menu, ...menuDeNinos].forEach((p) => p.products.map((p) => products.push(p)));

    const slug = params.slug; // When calling /abc the slug will be "abc"

    const product = products.filter((p) => p.slug === slug)[0];

    return { slug, product };
  },

  mounted() {},
};
</script>

