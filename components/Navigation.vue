<template>
  <div class="w-full bg-dark text-white sticky top-0 z-50">
    <div class="flex flex-col max-w-screen-xls px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div class="p-4 flex flex-row items-center justify-between">
        <nuxt-link to="/" class="text-lg font-semibold tracking-widest uppercase rounded-lg text-white focus:outline-none focus:shadow-outline">
          <logo/>
        </nuxt-link>
        <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
          <svg fill="#fff" viewBox="0 0 20 20" class="w-6 h-6">
            <path v-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            <path v-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-start md:flex-row">
        <nuxt-link to="/menu" class="px-4 py-2 mt-2 uppercase font-semibold bg-transparent hover:underline focus:underline focus:text-white hover:text-white text-gray-200 md:mt-0 font-rockwell-bold text-lg">Menú</nuxt-link>
        <nuxt-link to="/menu-de-ninos" class="px-4 py-2 mt-2 uppercase font-semibold bg-transparent hover:underline focus:underline focus:text-white hover:text-white text-gray-200 md:mt-0 md:ml-4 font-rockwell-bold text-lg">Menú de niños</nuxt-link>
        <nuxt-link to="/desayuno" class="px-4 py-2 mt-2 uppercase font-semibold bg-transparent hover:underline focus:underline focus:text-white hover:text-white text-gray-200 md:mt-0 md:ml-4 font-rockwell-bold text-lg">Desayuno</nuxt-link>
        <nuxt-link to="/ubicacion" class="px-4 py-2 mt-2 uppercase font-semibold bg-transparent hover:underline focus:underline focus:text-white hover:text-white text-gray-200 md:mt-0 md:ml-4 font-rockwell-bold text-lg">Ubicación</nuxt-link>
        <!-- <nuxt-link to="/limited-time" class="px-4 py-2 mt-2 uppercase font-semibold bg-transparent hover:underline focus:underline focus:text-white hover:text-white text-gray-200 md:mt-0 md:ml-4 font-rockwell-bold text-lg">Limited Time</nuxt-link> -->
        <a target="_blank" href="https://arbys.pr/empleos/" class="px-4 py-2 mt-2 uppercase font-semibold bg-transparent hover:underline focus:underline focus:text-white hover:text-white text-gray-200 md:mt-0 md:ml-4 font-rockwell-bold text-lg">Empleos</a>
        <!-- <a class="px-4 py-2 mt-2 uppercase font-semibold bg-transparent hover:underline focus:underline focus:text-white hover:text-white text-gray-200 md:mt-0 md:ml-4 font-rockwell-bold text-lg">Contact</a> -->
      
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
}
</script>
<style scoped>
nav a{
  font-size: 18px;
}
</style>
