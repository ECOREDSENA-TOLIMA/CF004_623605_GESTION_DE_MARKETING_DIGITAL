<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Canales digitales para el <em>marketing</em>

    p Las estrategias de marketing de contenido requieren de plataformas que permitan su divulgación, por ello a través del internet o diferentes plataformas, se crean los canales digitales que permiten la divulgación de las estrategias que permitan atraer <em>buyer</em> personas o <em>leads,</em> con el fin de crear consumo ya sea de productos, servicios o de la marca.
    p.mb-5 Ninguna campaña de <em>Marketing</em> de contenidos está completa si no cuenta con una sólida estrategia de distribución de los diferentes materiales y es que de este aspecto depende que el contenido llegue a la persona adecuada a través del canal idóneo y en el momento oportuno.  
    
    .tarjeta.tarjeta.p-4.mb-5.mt-0(style="background-color:#E3ECF7")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-md-7.mb-3
          p Como ves, ¡No es poca cosa! para comenzar el diseño de la estrategia de distribución, se debe pensar en los diferentes canales que se pueden utilizar para difundir y entregar los contenidos de forma eficaz y eficiente, como las redes sociales y el email.
          p En cuanto a los canales digitales, es importante hablar del <em>inbound marketing,</em> la cual es una estrategia de <em>marketing</em> diseñada para atraer consumidores a través de la creación de contenido de calidad, en cual emplea como medio de divulgación los canales digital, por lo cual se debe elegir el más idóneo de acuerdo con la estrategia a crear y el público objetivo. 

        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/img-1.png', alt='Imagen decorativa')

    p.mb-5 Por lo cual se puede definir un canal digital, como el medio por el cual se transmite información, se comunica o se ofrece y vende un servicio o productos; empleando Computadores, Tablet o Celulares, conectados a internet; y en cuanto a los canales digitales del marketing, son los medios empleados para divulgar sus estrategias de contenido digital. 

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1  Tipos de canales digitales

    p El inbound marketing, emplea una metodología para aplicar las estrategias en el marketing, la cual es atraer, interactuar, y deleitar, por lo cual hace uso de los canales digitales para llevar a cabo sus estrategias. 
    p.mb-5 Para entrar en contexto en cuanto a los tipos de canales digitales, es de resaltar que estos gozan de una gran popularidad en la actualidad, por lo cual es un grave error dejarlas fuera de cualquier estrategia de distribución de contenidos. 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-2.png')})`}"
        )
          .bloque-texto-g__texto.p-4
            p En cuanto al contenido digital de imágenes, son de los elementos empleados o esenciales en la creación de contenido digital, también suelen acompañar los textos; dentro de este contenido se encuentran imágenes, fotografías, infografías.
            p.mb-0 Los audios son principalmente creados para podcast en los cuales pueden encontrar temas de interés, entrevistas, audiolibros, otro de los audios de contenido digital son las canciones. 
        p Ya sabes! aprovecha la inmediatez de Twitter, el atractivo formato de consumo de YouTube, la flexibilidad de Facebook y la calidad visual de Instagram para compartir los contenidos de estrategia de inbound marketing. Eso sí, aunque todas estas redes son muy útiles y valiosas, es importante identificar cuál de estas es la predilecta o favorita del público objetivo, para que así sea explotada al máximo.
        p.mb-0 A continuación, se dan a conocer los diferentes tipos de canales digitales: 

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Plataformas de <em>social media</em>" :icono="require('@/assets/curso/temas/tema2/decorador-1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Son conocidos como medios sociales, el cual es uno de los medios de comunicación digital más recurrente de las organizaciones para lanzar estrategias de <em>marketing</em> digital, debido a que estas permiten estar en comunicación y comunidad con los consumidores digitales.
            p Dentro de estas plataformas, no solo se encuentran las redes sociales, también se encuentran como medios estratégicos <strong>los <em>blogs,</em> geolocalización,</strong> el cual permite que las marcas se visualicen en dispositivos móviles; <strong>los marcadores,</strong> permiten ser visualizado en la redes sociales, y <strong>multimedia</strong> permite la divulgación de contenido multimedia como <em>Livestream o YouTube.</em> 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-3.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Email de <em>Marketing</em>" :icono="require('@/assets/curso/temas/tema2/decorador-2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Los email son principalmente empleados para dar a conocer los portafolios de productos y servicios de las organizaciones, también es un medio empleado para comunicarse con los suscriptores. 
            p Dentro de las principales ventajas se encuentra que es de bajo costo, permite ser comprobado, es de fácil gestión, es personalizado y logra la fidelización de los <em>buyer</em> persona o <em>leads.</em> 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-4.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="<em>Marketing</em> de afiliados" :icono="require('@/assets/curso/temas/tema2/decorador-3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Permite que personas que se afilien a la marca promocionen un producto o servicio y reciban una comisión por ello, cada vez que genere una venta o logra más afiliados.
            p Dentro del mismo se encuentran: 
            ul.lista-ul.mb-3
              li.mb-0
                i.fas.fa-circle(style="color:#707070")
                | <strong>Afiliados:</strong> están suscritos a una marca para promocionar y vender sus productos o servicios a cambio de una comisión, la cual puede ser fija o porcentual. 
              li.mb-0
                i.fas.fa-circle(style="color:#707070")
                | <strong>Productores:</strong> encargados de crear los productos o servicios a través de las plataformas      digitales.
              li.mb-0
                i.fas.fa-circle(style="color:#707070")
                | <strong>Coproductores:</strong> son quienes colaboran en la creación de los productos o servicios digitales.
              li.mb-0
                i.fas.fa-circle(style="color:#707070")
                | <strong>Clientes:</strong> son quienes adquieren los productos o servicios. 

            p Pueden emplear diferentes plataformas digitales como los <em>blogs,</em> redes sociales, <em>Google,</em> dispositivos móviles.  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-5.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="<em>Mobile Marketing</em>" :icono="require('@/assets/curso/temas/tema2/decorador-4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p En la actualidad los consumidores digitales, se encuentran diariamente conectados a sus dispositivos móviles, especialmente el celular; por lo cual es uno de los medios más idóneos para transmitir publicidad digital.
            p Dentro de las acciones que se pueden adelantar se encuentran: 
            ul.lista-ul.mb-3
              li.mb-0
                i.fas.fa-circle(style="color:#E0E5EC")
                | <strong>Chat:</strong> La mensajería instantánea, se ha convertido en uno de los medios de comunicación más efectivos, empleados por los consumidores digitales, ya que buscan respuestas inmediatas; por lo cual puede iniciar una conversación entre empresa y cliente. 
              li.mb-0
                i.fas.fa-circle(style="color:#E0E5EC")
                | <strong>Mensajes de texto:</strong> La mensajería de texto es muy recurrente como publicidad digital, en especial cuando existen ofertas por parte de las marcas. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-6.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Mensajería de videos" :icono="require('@/assets/curso/temas/tema2/decorador-5.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Después del covid-19, la mensajería por videos, revolucionó el mercado de las comunicaciones, debido a que acortó las distancias al permitir realizar todo tipo de reuniones, tanto familiares, organizacionales o la forma de impartir y transmitir conocimiento 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-7.png', alt='Texto que describa la imagen')

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2  Acciones de <em>marketing</em> de contenidos digitales

    p El <em>marketing</em> de contenido busca atraer y fidelizar al <em>buyer</em> persona o <em>leads,</em> a través de la creación de contenido digital, en el cual implementan todas sus estrategias a través de diferentes canales digitales, en los cuales accede el público objetivo.
    p Las estrategias de marketing de contenido permiten a las organizaciones aumentar las ventas de productos o servicios, crear conexión con el buyer persona o leads, posicionar la marca, crear comunicación de valor de la marca y ofrecer solución a las necesidades. 
    p.mb-5 Como se ha mencionado la estrategia de inbound <em>marketing,</em> es principalmente empleada en el marketing digital y en el marketing de contenido; el inbound de marketing se centra en atraer el interés del buyer persona a través de la experiencia; por lo cual se basa en los siguientes pilares: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em> Pilares Inbound Marketing.</em>
        figure
          img.mb-2(src='@/assets/curso/temas/tema2/img-8-1.svg', alt='Se revelan 5 preguntas: 1- ¿Qué muestra el análisis DOFA? 2- ¿En qué áreas se encuentra y en qué áreas desea estar la empresa? 3- ¿Hay recursos suficientes para lograr los objetivos trazados? 4- ¿Los objetivos son realistas y se pueden alcanzar? 5- ¿Temporalmente cuál es el límite para alcanzarlos? ')

    .row.mt-5.mb-2
      .col-10.col-md-10.col-lg-8.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em> Pilares Inbound Marketing.</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-8-2.svg', alt='Se revelan 5 preguntas: 1- ¿Qué muestra el análisis DOFA? 2- ¿En qué áreas se encuentra y en qué áreas desea estar la empresa? 3- ¿Hay recursos suficientes para lograr los objetivos trazados? 4- ¿Los objetivos son realistas y se pueden alcanzar? 5- ¿Temporalmente cuál es el límite para alcanzarlos? ') 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p.mb-4 Por lo cual para implementar acciones de <em>Marketing</em> de contenido se debe seguir la estrategia de <em>Inbound Marketing,</em> el cual atrae el público objetivo, mediante la divulgación de contenido digital, que respeta los espacios y experiencias de cada consumidor; esta estrategia permite aumentar el tráfico, generar reconocimiento de marca, construir conexión con la audiencia, generar ventas, genera leads.
        .row.justify-content-center.align-items-center.mb-4
          .col-12(data-aos="fade-down-right")
            .cajon.color-primario.p-4(style="background-color:#E3ECF7")
              p La estrategia de <em>inbound marketing,</em> es principalmente empleada en el <em>marketing</em> digital y en el marketing de contenido; el <em>inbound de marketing</em> se centra en atraer el interés del <em>buyer</em> persona a través de la experiencia. 
              p Veamos más sobre el mismo, a continuación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ltis32BtI5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.text-center.mb-5 Dentro de las acciones a adelantar de marketing de contenido digital se encuentran: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="<em>Social Media</em>")
        .col-md-12.mb-4.mb-md-0
          p Las acciones de <em>social media</em> permite crear vínculos con el <em>buyer</em> persona, a través de plataformas sociales, el cual se crea principalmente en redes sociales, las cuales permiten impulsar las estrategias de <em>marketing</em> digital a través de la divulgación de contenido.
          p Esta acciones de <em>social media</em> permite hacer más  visible la marca, disminuir costos de inversión en estrategias de <em>marketing,</em> crear conexión y retroalimentación por parte del <em>buyer</em> persona, permite crear comunidades virtuales, aumenta el tráfico de sitios web.
          p Para implementar una estrategia de <em>social media</em> se debe: 

          .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
            .row
              .col-4
                img(src='@/assets/curso/temas/tema2/img-9.png')
              .col-8
                ul.lista-ul.mb-3
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Realizar una análisis del contexto interno y externo de la organización. 
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Establecer los objetivos del plan de marketing digital. 
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Establecer los objetivos de la estrategia de social media. 
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Identificar el buyer persona. 
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Crear el mensaje.  
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Diseñar el contenido digital. 
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Diseñar el calendario.  
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Divulgar el contenido digital en redes sociales.
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Realizar seguimiento y evaluación a estrategia de social media. 

      .row(titulo="Video <em>Marketing</em>")
        .col-md-12.mb-4.mb-md-0
          p El video <em>marketing,</em> hace parte de las estrategias del <em>marketing</em> digital, a través de la divulgación de contenido, mediante material audiovisuales, que permite impulsar un producto, servicio o marca. 
          p Dentro de las acciones del vídeo <em>marketing</em> se encuentran <em>unboxing</em> “desempaquetado”, busca que los consumidores experimenten conocer un producto o marca, por lo cual se graba un video en el que estos se encuentran destapando el producto; por lo general son producidos por influencers. 

          .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
            .row
              .col-4
                img(src='@/assets/curso/temas/tema2/img-10.png')
              .col-8
                p Dentro de los video <em>marketing</em> se encuentran los tutoriales, en el cual mediante un video de informa o enseña sobre un tema de interés; dentro de estos videos de <em>marketing,</em> también se destacan los <em>Webinar.</em> 
                p Los <em>webinar</em> o videoconferencias, permiten informar o tratar de un tema de interés para el <em>buyer</em> personas; estos webinar por lo general son seminarios que se transmiten en vivo o pueden estar pregrabados. La implementación de los <em>webinar</em> permite educar, informar sobre un producto o servicios, atraer nuevos <em>leads.</em>
          
      .row(titulo="<em>Copywriting</em>")
        .col-md-12.mb-4.mb-md-0
          p Es la estrategia de <em>marketing</em> de contenido, encargada de crear textos atractivos e influyentes y persuasivos para el <em>buyer</em> personas; dentro de la implementación de los <em>copywriting</em> se encuentran los <em>blogs,</em> foros, revistas, historias, <em>banners.</em>
          p Beneficios de la aplicación del <em>copywriting</em> al <em>marketing</em> de contenidos:

          .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
            .row
              .col-4
                img(src='@/assets/curso/temas/tema2/img-11.png')
              .col-8
                ul.lista-ul.mb-3
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Benefician la generación de confianza de los lectores.
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Da una mejor percepción del servicio o producto a ofrecer.
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Mejora en gran medida los ratios de conversión.
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Te ayuda a lograr un mejor posicionamiento SEO.
                  li.mb-0
                    i.fas.fa-circle(style="color:#707070")
                    | Permite una mejor toma de decisiones de los buyer persona.

                p Recuerda que el <em>copywriting</em> es una técnica orientada a la persuasión atractiva siempre orientado a la acción, generando atracción y aportando valor.
    
    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3  Tendencias en contenidos digitales

    p Las tecnologías de la comunicación y la información han evolucionado la forma en la cual se realizan las estrategias de <em>marketing,</em> el cual ha pasado del <em>marketing</em> tradicional, al <em>marketing</em> digital; el cual centra todas sus estrategias en divulgar contenido en plataformas digitales.
    p.mb-5 Estas nuevas estrategias de <em>marketing</em> han obligado a las organizaciones, a transformarse y a estar presente en este mundo virtual, de lo contrario serán relegadas y estarán destinadas a no crecer o no mantenerse dentro de la industria o el mercado.  

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mt-4(style="background: linear-gradient(0deg,#E3ECF7, #EEF5FF)")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-5.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/decorador-6.svg', alt='Texto que describa la imagen')
            .col-lg-6
              p En cuanto a las nuevas tendencias en cuanto a contenido digital, se encuentran: 
              ul.lista-ul.mb-3
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | Metaverso, NFT’s, realidad virtual y realidad aumentada.
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | Redes sociales.
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | <em>Marketing</em> enfocado en personas. 
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | Personalización de contenido. 
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | <em>Search Engine Optimization</em> (SEO).
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | Video <em>Marketing.</em>
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | <em>Marketing de influencers.</em> 
                li.mb-0
                  i.fas.fa-circle(style="color:#707070")
                  | <em>Mobile Marketing.</em> 













</template>

<script>
export default {
  name: 'Tema2',
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
