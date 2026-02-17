export const clinic = {
  name: "Corpus",
  logo: "/images/logo.png",
  tagline: "Fisioterapia profesional en Santa Cruz de Tenerife",
  description: "Corpus es tu clínica de fisioterapia de confianza en Santa Cruz de Tenerife, Álava. Con 5 estrellas en Google y valoración perfecta de nuestros pacientes, ofrecemos tratamientos personalizados de fisioterapia manual, deportiva y rehabilitación. Nuestro equipo liderado por Silvia combina profesionalidad, cercanía y técnicas avanzadas para tu recuperación completa. Ubicación excelente con aparcamiento disponible.",
  colors: {
    primary: "#d50052",
    secondary: "#400019",
    accent: "#d4004e",
    neutral: "#fcebf1"
  },
  phone: "689 88 20 43",
  whatsapp: "+34689882043",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Cam. la Piterita, 107, Nave 14, 38329 La Laguna, Santa Cruz de Tenerife, España",
    city: "Santa Cruz de Tenerife",
    province: "Álava",
    postalCode: "38329",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=8031570255310297799&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Corpus%20%4028.4759%2C-16.29&z=16&output=embed",
  coordinates: {
    lat: 28.4759,
    lng: -16.29
  },
  schedule: [
    {
      days: "lunes - jueves",
      hours: "8:00–20:30"
    },
    {
      days: "viernes",
      hours: "8:00–19:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 8,
    url: "https://maps.google.com/?cid=8031570255310297799&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
    featured: [
      {
        author: "JULIETA PAVÓN DÍAZ",
        rating: 5,
        text: "100% Recomendable. El trato muy profesional. Nos atendió Silvia, y fue muy amable con nosotros, se notaba que sabía de lo que hablaba. Buena relación calidad-precio 35€/hora, y en la primera sesión te hace una serie de pruebas para poder darte un diagnóstico. La ubicación es excelente, se encuentra en una nave donde se puede aparcar, por lo que acudir en vehículo no es problema. Volveremos!",
        date: "Hace 4 años"
      },
      {
        author: "AchoCristo",
        rating: 5,
        text: "Estuve por una lesión en el talón y el trato que me dieron fué excelente, gracias en especial a Silvia que es una chica super agradable y profesional, recomendado 100%",
        date: "Hace 4 meses"
      },
      {
        author: "Claudia Acosta García",
        rating: 5,
        text: "Una atención muy buena. Fui por primera vez allí y la verdad es que genial.",
        date: "Hace 2 años"
      },
      {
        author: "Valentina Ford.4",
        rating: 5,
        text: "Buenos físios!!!\nEstoy muy contenta con atención y calidad!!!",
        date: "Hace 3 años"
      },
      {
        author: "Octavio Raúl Pérez González",
        rating: 5,
        text: "Extraordinario Centro de Rehabilitacion y Fisiologia.",
        date: "Hace 2 años"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por profesionales con amplia experiencia. En tu primera sesión realizamos pruebas completas para un diagnóstico preciso. Tratamientos personalizados que alivian el dolor y mejoran tu movilidad de forma efectiva.",
      benefits: [
        "Diagnóstico completo en primera sesión",
        "Alivio del dolor desde el primer tratamiento",
        "Mejora significativa de la movilidad articular"
      ],
      icon: "Hand"
    },
    {
      id: "lesiones-deportivas",
      name: "Fisioterapia Deportiva",
      description: "Especialistas en recuperación de lesiones deportivas con técnicas avanzadas. Tratamos desde lesiones agudas hasta problemas crónicos que afectan tu rendimiento. Protocolos específicos para cada tipo de lesión y deporte.",
      benefits: [
        "Recuperación más rápida y segura",
        "Prevención de futuras lesiones",
        "Vuelta al deporte con garantías"
      ],
      icon: "Dumbbell"
    },
    {
      id: "lesiones-talon",
      name: "Tratamiento de Lesiones de Talón",
      description: "Atención especializada para lesiones del talón y pie, incluyendo fascitis plantar, tendinitis aquílea y otras patologías. Valoración específica y tratamiento personalizado con técnicas manuales y terapias avanzadas. Resultados comprobados por nuestros pacientes.",
      benefits: [
        "Reducción del dolor al caminar",
        "Tratamiento específico para cada patología",
        "Seguimiento hasta recuperación completa"
      ],
      icon: "Target"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación",
      description: "Programas de rehabilitación personalizados adaptados a tus necesidades específicas. Diseñamos planes de recuperación funcional tras lesiones, cirugías o procesos degenerativos. Seguimiento continuo para asegurar tu progreso constante.",
      benefits: [
        "Plan personalizado según tu lesión",
        "Recuperación funcional completa",
        "Seguimiento continuo de tu evolución"
      ],
      icon: "Activity"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Tratamiento especializado de puntos gatillo miofasciales mediante técnicas de punción seca. Efectivo para eliminar contracturas musculares persistentes y dolor crónico. Aplicado por fisioterapeutas certificados en esta técnica avanzada.",
      benefits: [
        "Eliminación de contracturas profundas",
        "Alivio del dolor crónico muscular",
        "Resultados duraderos y efectivos"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia",
      description: "Tecnología avanzada con corrientes eléctricas terapéuticas para acelerar tu recuperación. Complementamos los tratamientos manuales con equipos de última generación. Efectivo para reducir inflamación, dolor y mejorar la cicatrización.",
      benefits: [
        "Acelera el proceso de recuperación",
        "Reducción efectiva de la inflamación",
        "Tratamiento no invasivo y sin dolor"
      ],
      icon: "Zap"
    },
    {
      id: "valoracion-completa",
      name: "Valoración y Diagnóstico",
      description: "Primera sesión completa con pruebas específicas para identificar el origen de tu problema. Realizamos una evaluación exhaustiva antes de comenzar cualquier tratamiento. Te explicamos con claridad tu diagnóstico y el plan de tratamiento propuesto.",
      benefits: [
        "Diagnóstico preciso desde el inicio",
        "Pruebas completas incluidas",
        "Plan de tratamiento personalizado"
      ],
      icon: "Activity"
    },
    {
      id: "prevencion",
      name: "Prevención y Educación",
      description: "Asesoramiento profesional para prevenir lesiones y mantener tu bienestar a largo plazo. Te enseñamos ejercicios y hábitos posturales adaptados a tu actividad diaria. Seguimiento para asegurar que mantienes los resultados conseguidos.",
      benefits: [
        "Evita recaídas y nuevas lesiones",
        "Ejercicios personalizados para casa",
        "Mejora tu calidad de vida diaria"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Solicita tu Cita",
      description: "Contacta con nosotros por teléfono al 689 88 20 43 o WhatsApp. Te atenderemos personalmente para agendar tu cita en el horario que mejor te convenga. Nuestra ubicación cuenta con aparcamiento disponible para tu comodidad."
    },
    {
      step: 2,
      title: "Valoración Completa",
      description: "En tu primera sesión realizamos una serie de pruebas específicas para darte un diagnóstico preciso. Evaluamos tu estado físico, historial y necesidades particulares. Te explicamos con claridad qué te ocurre y cómo vamos a tratarlo."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Aplicamos las técnicas más adecuadas para tu caso específico: fisioterapia manual, punción seca, electroterapia o la combinación que necesites. Cada sesión está diseñada para maximizar tu recuperación con el trato profesional y cercano que nos caracteriza."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Monitorizamos tu evolución en cada sesión y ajustamos el tratamiento según tu progreso. Te acompañamos hasta tu recuperación completa y te damos pautas para mantener los resultados. Nuestro objetivo es que vuelvas a tu vida normal sin molestias."
    }
  ],
  whyUs: [
    {
      title: "Valoración 5 Estrellas en Google",
      description: "Nuestros pacientes nos avalan con una valoración perfecta de 5 estrellas basada en 8 reseñas reales. Destacan nuestro trato profesional y cercano, la efectividad de los tratamientos y la excelente relación calidad-precio. Tu confianza es nuestro mejor reconocimiento.",
      icon: "Heart"
    },
    {
      title: "Valoración Completa Desde el Primer Día",
      description: "En tu primera sesión realizamos una serie de pruebas específicas para darte un diagnóstico preciso y personalizado. No empezamos ningún tratamiento sin entender completamente tu problema. Te explicamos con claridad qué te ocurre y cómo vamos a solucionarlo.",
      icon: "Activity"
    },
    {
      title: "Equipo Profesional y Cercano",
      description: "Nuestro equipo liderado por Silvia combina amplio conocimiento técnico con un trato humano excepcional. Los pacientes valoran especialmente nuestra profesionalidad, amabilidad y la confianza que transmitimos. Nos importa que te sientas cómodo y comprendido durante todo el proceso.",
      icon: "Hand"
    },
    {
      title: "Ubicación Excelente con Aparcamiento",
      description: "Corpus está ubicado en una nave en Santa Cruz de Tenerife con zona de aparcamiento disponible, facilitando tu acceso en vehículo sin complicaciones. Nuestros pacientes destacan la comodidad de nuestra ubicación. Llegar a tu cita es fácil y sin estrés.",
      icon: "Target"
    }
  ],
  team: [
    {
      name: "Silvia",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Corpus nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Corpus - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Corpus - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Corpus - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Corpus - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Corpus - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Corpus - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Corpus - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Corpus - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "Corpus - Imagen 9"
    }
  ],
  faq: [
    {
      question: "¿Cuánto cuesta una sesión en Corpus?",
      answer: "En Corpus ofrecemos sesiones de fisioterapia por 35€ la hora, con una excelente relación calidad-precio. La primera sesión incluye una valoración completa con pruebas específicas para darte un diagnóstico preciso, sin coste adicional. Te explicamos desde el inicio cuántas sesiones aproximadas necesitarás según tu caso."
    },
    {
      question: "¿Qué incluye la primera sesión?",
      answer: "La primera sesión en Corpus es una valoración completa donde realizamos una serie de pruebas específicas para diagnosticar correctamente tu problema. Evaluamos tu historial, realizamos tests físicos y te explicamos con claridad qué te ocurre y cuál será el plan de tratamiento. Todo esto está incluido en el precio de la sesión, sin costes ocultos."
    },
    {
      question: "¿Dónde está ubicada la clínica y tiene aparcamiento?",
      answer: "Corpus está ubicado en una nave en Santa Cruz de Tenerife, Álava, con excelente accesibilidad. Disponemos de zona de aparcamiento, por lo que acudir en vehículo no es ningún problema. Nuestros pacientes destacan especialmente la comodidad de nuestra ubicación y la facilidad para aparcar."
    },
    {
      question: "¿Qué tipo de lesiones tratáis en Corpus?",
      answer: "En Corpus tratamos todo tipo de lesiones musculoesqueléticas: lesiones deportivas, problemas de espalda, contracturas, lesiones de talón como fascitis plantar, tendinitis, dolor crónico y rehabilitación post-quirúrgica. Realizamos una valoración personalizada para cada caso y aplicamos las técnicas más efectivas: fisioterapia manual, punción seca, electroterapia y más."
    },
    {
      question: "¿Cómo puedo pedir cita en Corpus?",
      answer: "Puedes solicitar tu cita llamando directamente al 689 88 20 43 o por WhatsApp al mismo número. Te atenderemos personalmente para encontrar el horario que mejor se ajuste a tu disponibilidad. Nuestro trato cercano empieza desde el primer contacto."
    },
    {
      question: "¿Quién me atenderá en la clínica?",
      answer: "En Corpus contamos con un equipo de fisioterapeutas profesionales altamente cualificados. Silvia, nuestra fisioterapeuta principal, es especialmente valorada por los pacientes por su profesionalidad, conocimiento y trato cercano. Todos nuestros profesionales están comprometidos con tu recuperación y bienestar."
    },
    {
      question: "¿Cuántas sesiones necesitaré?",
      answer: "El número de sesiones depende de tu lesión específica y tu respuesta al tratamiento. En la primera sesión, tras realizar las pruebas de valoración, te daremos una estimación aproximada. Nuestro objetivo es tu recuperación completa en el menor tiempo posible, con seguimiento continuo para ajustar el tratamiento según tu evolución."
    },
    {
      question: "¿Qué opinan los pacientes de Corpus?",
      answer: "Corpus tiene una valoración de 5 estrellas en Google basada en 8 reseñas de pacientes reales. Nuestros pacientes destacan especialmente el trato profesional y cercano, la efectividad de los tratamientos, la excelente relación calidad-precio y nuestra ubicación con aparcamiento. Muchos nos recomiendan al 100% tras su experiencia en la clínica."
    }
  ],
  seo: {
    titleTemplate: "%s | Corpus",
    defaultTitle: "Corpus - Fisioterapia en Santa Cruz de Tenerife",
    defaultDescription: "Clínica de fisioterapia en Santa Cruz de Tenerife con 5★ en Google. Tratamientos personalizados, valoración completa y aparcamiento. 35€/hora. Llama al 689 88 20 43.",
    keywords: [
      "fisioterapia Santa Cruz de Tenerife",
      "Corpus fisioterapia",
      "fisioterapeuta Santa Cruz de Tenerife",
      "clínica fisioterapia Álava",
      "fisioterapia deportiva Santa Cruz",
      "lesiones talón Santa Cruz de Tenerife",
      "rehabilitación Santa Cruz de Tenerife",
      "fisioterapia manual Álava",
      "punción seca Santa Cruz",
      "fisioterapeuta Silvia Santa Cruz",
      "fisioterapia con aparcamiento",
      "mejor fisioterapia Santa Cruz de Tenerife"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Corpus",
    cif: "",
    registeredAddress: "Cam. la Piterita, 107, Nave 14, 38329 La Laguna, Santa Cruz de Tenerife, España, Santa Cruz de Tenerife, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Santa Cruz de Tenerife"
  ],
  heroDescription: "En Corpus te ofrecemos atención fisioterapéutica profesional y cercana en Santa Cruz de Tenerife. Realizamos una valoración completa en tu primera sesión para diseñar el tratamiento más efectivo para tu recuperación. Excelente ubicación con facilidad de aparcamiento.",
  specialty: "Fisioterapia Personalizada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita de valoración en Corpus. Te atenderemos con profesionalidad y cercanía para diseñar el mejor plan de recuperación para ti.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
