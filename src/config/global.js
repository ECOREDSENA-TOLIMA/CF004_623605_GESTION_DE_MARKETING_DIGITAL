export default {
  global: {
    componenteFormativo:
      '<em>Marketing</em> digital para comunidades virtuales',
    descripcionCurso:
      'El componente formativo busca desarrollar conocimientos respecto a el contenido digital, los canales digitales y los planes de comunicación digital, como estrategias del <em>marketing</em> digital; aplicables en todos los campos y diferentes tipos de organizaciones que desean generar valor de marca a través del <em>marketing</em> digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contenido digital para el <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación del contenido digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de contenidos digitales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Canales digitales para el <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de canales digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Acciones de <em>marketing</em> de contenidos digitales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tendencias en contenidos digitales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Marketing</em> digital y de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<em>Storytelling</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '<em>SEO y SEM</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Email marketing</em>',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: '<em>Social media marketing</em>',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Comunicación digital',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Plan de comunicación digital',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Plataformas para la comunicación digital',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. <em>Marketing</em> digital y de contenidos',
      referencia:
        'UNIVA (2018, 6 febrero). Redes Sociales, La comunidad Virtual [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zM_p8MvLOyM',
    },
    {
      tema: '3. <em>Marketing</em> digital y de contenidos',
      referencia:
        'SENA. (2020, 12 mayo). Conceptos Básicos Sobre <em>Marketing</em> Digital - SENA [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LnUX087fcsk',
    },
    {
      tema: '3. <em>Marketing</em> digital y de contenidos',
      referencia:
        'Sanz-Marcos, P., Jiménez-Marín, G., & Elías-Zambrano, R. (2019). La incorporación de la figura del <em>influencer</em> en las campañas publicitarias: Consecuencias para las agencias de publicidad españolas. AdComunica, 63-86.',
      tipo: 'Libro',
      link:
        'http://www.e-revistes.uji.es/index.php/adcomunica/article/view/5021',
    },
    {
      tema: '3.1. <em>Storytelling</em>',
      referencia:
        'Coca Cola (2020, 7 de septiembre) Juntos Sabe Mejor. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QQUS8AO9Dws',
    },
  ],
  glosario: [
    {
      termino: 'Campañas Publicitaria Digital',
      significado:
        'Estrategia de <em>marketing</em> digital, que busca dar a conocer un producto, servicio o marca, en medios digitales.',
    },
    {
      termino: '<em>KPI</em>',
      significado:
        'Son las siglas de <em>key performance indicator;</em> son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de <em>social media marketing.</em>',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'Son estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <em>blog</em> y del <em>social media marketing.</em>',
    },
    {
      termino: 'Medios digitales',
      significado:
        'Son las plataformas digitales que permiten la disfunción de información y comunicación.',
    },
    {
      termino: 'Publicidad digital',
      significado:
        'La publicidad digital es una estrategia de <em>marketing</em> implementada en medios digitales, con el fin de dar a conocer un producto, servicio o marca.',
    },
    {
      termino: 'Redes Sociales',
      significado: 'Comunidad de personas que se forman en internet.',
    },
    {
      termino: '<em>Search Engine Marketing (SEM)</em>',
      significado:
        'Es el conjunto de estrategia para implementar publicidad en motores de búsqueda.',
    },
    {
      termino: 'Sitio <em>Web</em>',
      significado: 'Conjunto de páginas en línea.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Técnica de <strong><em>marketing</em></strong> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
    {
      termino: '<em>Webinars</em>',
      significado:
        'También llamados <strong><em>webinars,</em></strong> son eventos o conferencias que tienen lugar en el medio <em>online.</em> Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
    {
      termino: '<em>Youtubers</em>',
      significado:
        'Son las personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <em>Youtuber</em> gana dinero por los anuncios de los videos o por mostrar productos patrocinados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carús, L. F., Argüelles, I. (s.f.) El comportamiento del consumidor online factores que aumentan la actividad de búsqueda de EWOM en el sector turístico. Uniovi.es.',
      link:
        'https://digibuo.uniovi.es/dspace/bitstream/handle/10651/29594/TFM_FdezCarus,Leticia.pdf;jsessionid=DBC988DD19773D40B92C3AE8CD6D8EC3?sequence=6',
    },
    {
      referencia:
        'Del Carmen, M., et al (s.f.) El consumidor digital: motivaciones y factores que influencian su comportamiento. Idus.us.es.',
      link:
        'https://idus.us.es/bitstream/handle/11441/93839/El_consumidor_digital.pdf?sequence=3',
    },
    {
      referencia:
        'Moschini, S., (s.f.). Claves del <em>marketing</em> digital. Edu.mx.',
      link:
        'https://www.ceut.edu.mx/Biblioteca/books/Administraci%C3%B3n-2/Claves-del-Marketing-Digital.pdf',
    },
    {
      referencia:
        'Núñez, P., Ruiz, S. (2021). Presencia de <em>influencers</em> en campañas publicitarias digitales. Estudio de su capacidad persuasiva y efectividad en jóvenes. Universidad Complutense de Madrid.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Alejandra Tovar Bernal',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de Industrias y la Construcción',
        },
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlevda',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
