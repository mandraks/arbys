<template>
  <Layout>
    <img src="~/assets/images/image 48.png" alt="" />

    <div class="flex justify-center w-full">
      <div class="container py-12 px-16">
        <h1 class="uppercase text-6xl font-rockwell-bold mt-10">
          QUIÉNES SOMOS Y <br />QUÉ HACEMOS
        </h1>
        <h2 class="mt-7 font-rockwell-bold text-2xl">
          Inspirando sonrisas a través de
          <br />experiencias deliciosas
        </h2>
        <p class="font-rockwell mt-5">
          El propósito de Arby’s es inspirar sonrisas a través de experiencias
          deliciosas. Arby’s cumple con su propósito al celebrar el arte de las
          carnes cada día, preparando en nuestros restaurantes una amplia
          variedad de opciones, para satisfacer todos los antojos; y lo hacemos
          preparando sándwiches, con panes frescos, deliciosos vegetales, quesos
          y salsas que realzan todo su sabor.
        </p>

        <div class="relative">
          <div class="w-10 h-5 bg-primary absolute right-full top-5 mr-3"></div>
          <h2 class="mt-7 font-rockwell-bold text-2xl">EN LO QUE CREEMOS</h2>
          <p class="font-rockwell mt-1">
            Desde nuestro primer día en 1964, hemos basado nuestra filosofía en
            seis principios que nos guían <br />en el cumplimiento de nuestros
            objetivos, en las relaciones que formamos y en las decisiones que
            tomamos.
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-center w-full">
      <div class="container px-10">
        <div class="card-shadow justify-self-center p-10 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
            <div v-for="(entry, i) in entries" :key="i">
              <h3 class="font-rockwell-bold text-2xl">
                <span class="inline-block text-primary text-7xl">{{
                  i + 1
                }}</span>
                {{ entry.title }}
              </h3>
              <p class="font-rockwell">{{ entry.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      entries: [
        {
          title: "SUEÑA EN GRANDE",
          description:
            "Nuestra historia es la prueba de que aún los sueños más grandes, se cumplen. Por eso brindamos oportunidades para que otros también cumplan sus sueños.",
        },
        {
          title: "TRABAJA DURO",
          description:
            "Somos fieles creyentes de hacer las cosas bien y, hacer las cosas bien demanda un gran esfuerzo.",
        },
        {
          title: "HAZLO",
          description:
            "Hemos descubierto que, por lo general el éxito genera más éxito, es por esto que siempre estamos en busca de los mejores resultados.",
        },
        {
          title: "JUEGA LIMPIO",
          description:
            "Apreciamos la honestidad, la integridad, el respeto, el coraje y la determinación en todo lo que hacemos.",
        },
        {
          title: "DIVIÉRTETE",
          description:
            "Si no te estás divirtiendo en lo que haces, entonces deberías hacer otra cosa. La vida es muy corta para no disfrutarla.",
        },
        {
          title: "HAZ LA DIFERENCIA",
          description:
            "¿Puede un restaurante hacer la diferencia? Nosotros estamos seguros de que sí. Por esta razón es que sentimos la responsabilidad de mejorar las vidas de nuestros colaboradores y sus comunidades.",
        },
      ],
    };
  },
};
</script>

