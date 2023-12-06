<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La síntesis del componente formativo marketing digital para comunidades virtuales aborda aspectos esenciales del marketing digital, dividiéndose en tres secciones principales. La primera sección abarca el contenido digital para el marketing, explorando su clasificación y diferentes tipos. La segunda sección se centra en los canales digitales para el marketing, detallando tipos de canales, acciones de marketing de contenidos digitales y tendencias en este ámbito. Finalmente, la tercera sección aborda la integración del marketing digital y de contenidos, destacando aspectos clave como el storytelling, SEO y SEM, email marketing, social media marketing, comunicación digital, planificación de la comunicación digital, y plataformas para la comunicación digital. Esta estructura proporciona una comprensión completa de las estrategias y herramientas necesarias para el marketing digital en entornos virtuales.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
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
