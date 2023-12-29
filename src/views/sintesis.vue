<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La síntesis del componente formativo <em>marketing</em> digital para comunidades virtuales aborda aspectos esenciales del <em>marketing</em> digital, dividiéndose en tres secciones principales. La primera sección abarca el contenido digital para el <em>marketing,</em> explorando su clasificación y diferentes tipos. La segunda sección se centra en los canales digitales para el <em>marketing,</em> detallando tipos de canales, acciones de <em>marketing</em> de contenidos digitales y tendencias en este ámbito. Finalmente, la tercera sección aborda la integración del <em>marketing</em> digital y de contenidos, destacando aspectos clave como el <em>storytelling,</em> SEO y SEM, <em>email marketing,</em> <em>social media marketing,</em> comunicación digital, planificación de la comunicación digital, y plataformas para la comunicación digital. Esta estructura proporciona una comprensión completa de las estrategias y herramientas necesarias para el <em>marketing</em> digital en entornos virtuales.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis para el componente marketing digital para comunidades virtuales se muestra la clasificación y tipos de contenido digital. La sección de canales digitales incluye el email, las redes sociales, marketing de afiliados, mobile marketing y mensajería de videos. Además, se abordan tácticas del marketing digital y de contenidos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
