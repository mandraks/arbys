<template>
  <div class="mt-20">
    <h1 class="uppercase text-4xl font-rockwell-bold">
      <span class="w-8 h-4 bg-primary inline-block relative -top-1"></span>
      Nuestro menú
    </h1>
    <div class="relative menu-container px-10 flex justify-center w-full">
      <div class="container">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 relative z-10 pt-10"
        >
          <MenuCard v-for="menu in menus" :key="menu.name" :menu="menu" />
          <div class="flex items-center w-full">
            <div class="flex flex-col w-1/2 items-start">
              <div class="px-5">
                <h3 class="text-3xl text-white font-league-gothic uppercase">
                  somos más que solo
                </h3>
                <h2
                  class="text-6xl text-white font-medium font-rockwell-bold uppercase"
                >
                  Carnes
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuCard from "./MenuCard.vue";
export default {
  components: { MenuCard },
  data() {
    return {
      menus: [
        {
          name: "Beef",
          items: 11,
          link: "/menu#beef",
          image: require("~/assets/images/beef_burger.webp"),
        },
        {
          name: "Pork",
          items: 2,
          link: "/menu#pork",
          image: require("~/assets/images/pork_burger.webp"),
        },
        {
          name: "Turkey",
          items: 4,
          link: "/menu#turkey",
          image: require("~/assets/images/turkey_swiss.webp"),
        },
        {
          name: "chicken",
          items: 7,
          link: "/menu#chicken",
          image: require("~/assets/images/chicken_burger.webp"),
        },
        {
          name: "acompañantes",
          items: 6,
          link: "/menu#acompanantes",
          image: require("~/assets/images/acompanates.webp"),
        },
        {
          name: "Postres y bebidas",
          items: 17,
          link: "/menu#batidas",
          image: require("~/assets/images/postres-bebidas-.webp"),
        },
        {
          name: "Menú De Niños",
          items: 11,
          link: "/menu-de-ninos",
          image: require("~/assets/images/menu_de_ninos.webp"),
        },
        {
          name: "Desayuno",
          items: 7,
          link: "/menu#desayuno",
          invisible: true,
          image: require("~/assets/images/homepage-desayuno.webp"),
        },
      ],
    };
  },
};
</script>
<style scoped>
@media (min-width: 1024px) {
  .menu-container:after {
    content: "";
    position: absolute;
    bottom: -5%;
    right: 0;
    width: 50%;
    height: 50%;
    background-color: #2a221c;
  }
}
</style>
