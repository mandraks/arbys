<template>
    <Layout>
        <div class="mt-10 container flex-1 justify-center px-10">
            <ul class="flex">
                <li class="mr-2">
                    <nuxt-link to="/menu" class="uppercase font-helvetica text-sm font-bold underline">menú</nuxt-link>
                </li>
                <li class="text-gray-500 font-bold text-xs relative top-1">/</li>
                <li class="ml-2">
                    <nuxt-link to="/desayuno" class="uppercase font-helvetica text-sm font-bold underline">Desayuno</nuxt-link>
                </li>
            </ul>
        </div>
    
        <div class="flex justify-center w-full" v-for="(category, i) in categories" :key="i" :id="category.sectionId">
            <div class="mt-5 container px-10">
                <a :href="`#${category.sectionId}`" class="uppercase font-rockwell-bold lg:text-5xl text-2xl">
              {{ category.title }}
              <span v-if="category.subtitle" class="font-league-gothic">{{
                category.subtitle
              }}</span>
            </a>
    
                <div class="
                grid grid-cols-1
                lg:grid-cols-6
                md:grid-cols-4
                sm:grid-cols-2
                sm:gap-4
                relative
                z-10
                pt-10
              ">
                    <ProductCard v-for="product in category.products" :key="product.name" :product="product" />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import { menu } from "../store/data";
export default {
    computed: {
        categories() {
            return menu.filter(m => m.sectionId === 'desayuno')
        },
    },
};
</script>

