<template>
  <footer>
    <section :class="`flex items-end pl-12 pt-8 ${bgColor}`">
      <picture class="flex">
        <img
          alt=""
          src="https://images.ctfassets.net/o19mhvm9a2cm/6aW0dnmnt2moCCalbFoKPS/27c317aa3ac9fe5139b45201710b69a3/cow.png?w=1500"
          style="object-fit: contain"
      /></picture>
      <picture class="flex">
        <img
          alt=""
          src="https://images.ctfassets.net/o19mhvm9a2cm/585y3CBsudsdZz8EVgdvtH/89bf534a29a1389820e7e9663e1c97ea/Noun_Project_1021472.svg?w=1500"
          style="object-fit: contain" /></picture
      ><picture class="flex">
        <img
          alt=""
          src="https://images.ctfassets.net/o19mhvm9a2cm/4yRY4032gude8dCgqvPxA9/b3abca8fbe56e5c12fa892254a5aeb01/Noun_Project_1021476.svg?w=1500"
          style="object-fit: contain"
      /></picture>
    </section>

    <section
      class="
        lg:p-0
        lg:flex lg:flex-wrap
        bg-dark
        border-t-4 border-primary
        py-0
        px-5
      "
    >
      <div
        class="
          lg:overflow-hidden
          lg:w-full
          lg:flex-row
          flex-col
          flex
          lg:justify-between
          py-0
          px-5
          relative
          z-10
        "
      >
        <section class="lg:w-1/4 w-full lg:pl-7 my-8 text-white mb-8">
          <div class="font-league-gothic uppercase mt-0 mx-0 mb-5 text-3xl">
            quiénes somos y qué hacemos
          </div>
          <ul class="footer_linkBlockList__2YOxX">
            <li class="lg:text-lg mb-5 text-base underline font-league-gothic-regular">
              <nuxt-link to="/sobre-nosotros" class="flex items-center uppercase">
                <ListBullet />sobre nosotros
              </nuxt-link>
            </li>
            <li class="lg:text-lg mb-5 text-base underline font-league-gothic-regular">
              <nuxt-link to="/contact-us" class="flex items-center uppercase">
                <ListBullet />
                contáctanos
              </nuxt-link>
            </li>
            <li class="lg:text-lg mb-5 text-base underline font-league-gothic-regular">
              <a href="" class="flex items-center uppercase">
                <ListBullet />
                alérgenos
              </a>
            </li>
            <li class="lg:text-lg mb-5 text-base underline font-league-gothic-regular">
              <a :href="'/arbys-nutritional-info.pdf'" target="_blank" class="flex items-center uppercase">
                <ListBullet />
                nutrición
              </a>
            </li>
            <li class="lg:text-lg mb-5 text-base underline font-league-gothic-regular">
              <nuxt-link to="/politica-de-privacidad" class="flex items-center uppercase">
                <ListBullet />
                política de privacidad
              </nuxt-link>
            </li>
          </ul>
        </section>
        <section
          class="
            lg:pl-10
            py-12
            text-white
            md:mb-8
            sm:w-full
            self-center
            lg:border-l
            border-gray-600
          "
        >
          <div class="font-league-gothic uppercase mt-0 mx-0 mb-5 text-3xl">
            Síguenos
          </div>
          <div class="flex">
            <span class="inline-block mr-4">
              <a target="_blank" href="https://www.facebook.com/arbyspuertorico1">
                <picture class="flex">
                  <img
                    alt="Facebook"
                    src="//images.ctfassets.net/o19mhvm9a2cm/79XbXs7E5XxPLcsdqxOUOJ/98267caf8cc8449d31a8fbf7eb60725e/Facebook.svg?w=1500"
                    style="object-fit: contain"
                  />
                </picture>
              </a>
            </span>
            <span>
              <a target="_blank" href="https://www.instagram.com/arbyspuertorico/">
                <picture class="flex">
                  <img
                    alt="icon insta"
                    src="//images.ctfassets.net/o19mhvm9a2cm/6LFURS5lCCsbyoQz5VevFK/27ed60cc3a6caa783f89c4a8ea70d975/icon_insta.png?w=1500"
                    style="object-fit: contain"
                  />
                </picture>
              </a>
            </span>
          </div>
        </section>
        <picture class="flex flex-1">
          <img
            src="//images.ctfassets.net/o19mhvm9a2cm/5XlafrPuz8cK5nmXMqxfNi/964e80713a99bb0172fbfbccde6af455/A_LETTER.png?w=1500"
            class="absolute sm:bottom-8 opacity-10 right-0 bottom-0"
            style="object-fit: contain"
        /></picture>
      </div>
    </section>
  </footer>
</template>
<script>

export default {
  computed: {
    bgColor(){
      return this.$route.name === 'products-slug'? 'bg-gray-50': ''
    }
  }
}
</script>

<style scoped>
</style>
