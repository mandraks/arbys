<template>
  <div class="bg-white shadow-lg mb-5" style="height: 160px;" :style="{ visibility: menu.invisible?'hidden':'visible' }">
    <nuxt-link
      :to="menu.link"
      class="flex items-center"
      @click.native="scroll"
    >
      <div class="flex items-center w-full">
        <div class="w-1/2">
          <img :src="menu.image" :alt="menu.name" />
        </div>
        <div class="flex flex-col w-1/2 items-start">
          <div class="px-5">
            <h3
              class="
                text-3xl text-black
                uppercase
                text-center
                font-league-gothic
              "
            >
              {{ menu.name }}
            </h3>
            <p class="text-gray-500 text-center">{{ menu.items }} Items</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["menu"],
  methods: {
    scroll() {
      if (this.$route.hash) {
        const anchor = document.querySelector(this.$route.hash);

        // Check if the anchor has been found
        if (anchor) {
          window.scrollTo({
            // Scroll so that the anchor is at the top of the view
            top: anchor.getBoundingClientRect().top + window.pageYOffset - 250,
          });
        }
      }
    },
  },
};
</script>
<style scoped>
</style>
