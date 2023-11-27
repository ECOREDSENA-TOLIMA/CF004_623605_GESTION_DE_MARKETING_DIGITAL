<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 A través de este componente se le brindará al aprendiz las herramientas necesarias para abordar la planeación y diseño de planes de comunicación digital, lo invitamos a ver el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Oz4vPoWkmJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
