export const site = {
  name: "Lavanderia Breier",
  category: "Lavanderia",
  city: "Novo Hamburgo",
  state: "RS",
  address: "Rua Machado de Assis, 431 - Ideal, Novo Hamburgo - RS",
  postalCode: "93336-000",
  plusCode: "8V45+53 Ideal, Novo Hamburgo - RS",
  phoneDisplay: "(51) 99903-5544",
  phoneLink: "https://wa.me/5551999035544?text=Ol%C3%A1%2C%20Lavanderia%20Breier!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  phoneDisplayAlt: "(51) 3066-9500",
  phoneLinkAlt: "tel:+555130669500",
  googlePhoneDisplay: "(51) 3066-9500",
  googlePhoneLink: "tel:+555130669500",
  instagram: "https://www.instagram.com/lavanderiabreier/",
  googleProfile: "https://www.google.com/maps/place/Lavanderia+Breier/@-29.6946669,-51.1422689,1959m/data=!3m1!1e3!4m15!1m8!3m7!1s0x951943016442f355:0x3883ccc47289101d!2sLavanderia+Breier!8m2!3d-29.694543!4d-51.142445!10e5!16s%2Fg%2F1tnhzhf4!3m5!1s0x951943016442f355:0x3883ccc47289101d!8m2!3d-29.694543!4d-51.142445!16s%2Fg%2F1tnhzhf4",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13876.324208036233!2d-51.142445!3d-29.694543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943016442f355%3A0x3883ccc47289101d!2sLavanderia%20Breier!5e0!3m2!1spt-BR!2sbr!4v1727181055000!5m2!1spt-BR!2sbr",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=-29.694543,-51.142445",
  rating: "4,8",
  socialStats: { followers: "2.333", posts: "40" },
  environmentalLicense: "Licenciada",
  freeDelivery: "Coleta e Entrega Grátis",
  hours: [
    { days: "Segunda a sexta", time: "08:00–12:00 e 13:00–18:00" },
    { days: "Sábado", time: "08:00–12:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  seo: {
    title: "Lavanderia Breier | Coleta e Entrega Grátis · Cuidado Profissional",
    description: "Lavanderia Breier: higienização de roupas, edredons e tapetes. Especializada em conforto para o seu lar. Coleta e entrega gratuita em Novo Hamburgo/RS.",
    url: "https://lavanderiabreier.com.br",
    ogImage: "/images/lavanderia-breier.webp",
  },
  assets: {
    hero: "/images/lavanderia-breier.webp",
    about: "/images/about-heritage.webp?v=2",
    institutional: "/images/lavanderia-breier-hero.webp",
    logo: "/images/logo-lavanderia-breier.webp",
    storefront: "/images/lavanderia-breier.webp",
    instagram: "/images/lavanderia-breier-instagram.webp",
    instagramFeed: "/images/service-roupas.webp",
  },
} as const;

export const services = [
  { id: "lavagem-roupas", image: "/images/service-roupas.webp", icon: "/images/icon-roupas.webp", imagePosition: "center", title: "Lavagem de roupas & a seco", text: "Roupas do dia a dia, ternos, vestidos de festa e peças delicadas com lavagem a seco profissional.", query: "Lavagem de roupas e a seco" },
  { id: "tapetes-cortinas", image: "/images/service-tapetes.webp", icon: "/images/icon-tapetes.webp", imagePosition: "center", title: "Tapetes & cortinas", text: "Remoção completa de sujeiras, ácaros e odores preservando texturas, cores e tramas delicadas.", query: "Tapetes e cortinas" },
  { id: "tenis-calcados", image: "/images/service-calcados.webp", icon: "/images/icon-calcados.webp?v=2", imagePosition: "center", title: "Tênis & calçados em geral", text: "Higienização detalhada interna e externa, desodorização e revitalização para calçados de qualquer modelo.", query: "Limpeza de tênis e calçados" },
  { id: "linha-pet", image: "/images/service-pet.webp", icon: "/images/icon-pet.webp?v=2", imagePosition: "center", title: "Linha Pet especializada", text: "Caminhas, tapetes, roupinhas e mantas desinfetadas com produtos antialérgicos e seguros para pets.", query: "Higienização da Linha Pet" },
  { id: "couro-motoqueiro", image: "/images/service-couro.webp", icon: "/images/icon-couro.webp?v=2", imagePosition: "center", title: "Jaquetas de motoqueiro & couro", text: "Limpeza técnica e hidratação profunda para couro e jaquetas de motociclista com proteção UV.", query: "Limpeza de jaqueta de motoqueiro e couro" },
  { id: "passadoria", image: "/images/service-passadoria.webp", icon: "/images/icon-passadoria.webp", imagePosition: "center", title: "Passadoria profissional", text: "Acabamento impecável a vapor, dobradas ou no cabide. Praticidade total para a sua rotina.", query: "Passadoria profissional" },
  { id: "cortinas-persianas", image: "/images/service-cortinas.webp", icon: "/images/icon-cortinas.webp?v=2", imagePosition: "center", title: "Cortinas finas", text: "Lavagem especializada de cortinas com pregas, blackout e tecidos leves.", query: "Lavagem de cortinas" },
] as const;

export const aboutBenefits = [
  { icon: "/images/about-tradition.webp", alt: "Tradição", title: "Tradição e<br>cuidado local" },
  { icon: "/images/about-eco.webp", alt: "Licença Ambiental", title: "Licença<br>Ambiental Ativa" },
  { icon: "/images/about-team.webp", alt: "Coleta e Entrega", title: "Coleta e entrega<br>grátis em NH" },
  { icon: "/images/about-quality.webp", alt: "Qualidade", title: "Compromisso com<br>qualidade e prazos" },
] as const;

export const processSteps = [
  { title: "Coleta grátis no<br>seu endereço", text: "Buscamos suas peças na sua casa ou empresa sem custo de deslocamento, ou você entrega na loja.", icon: "/images/process-step1.webp", alt: "Sacola de Coleta" },
  { title: "Processos ecológicos<br>e seguros", text: "Equipamentos modernos e produtos certificados e adequados que preservam as fibras e o meio ambiente.", icon: "/images/process-step2.webp", alt: "Máquina de Lavar" },
  { title: "Higienização,<br>impermeabilização e ferro", text: "Cuidado artesanal, proteção contra líquidos e acabamento impecável para cada tipo de peça.", icon: "/images/process-step3.webp", alt: "Ferro a Vapor" },
  { title: "Entrega grátis com<br>pontualidade", text: "No prazo combinado, tudo embalado, cheiroso e pronto para uso direto no seu armário ou casa.", icon: "/images/process-step4.webp", alt: "Camisa Polo no Cabide" },
] as const;

export const reviews = [
  { text: "Excelente, recomendo de olhos fechados! Depois de muito pesquisar uma lavanderia especializada em peças delicadas, decidi ir até a Breyer pessoalmente, pois estava receosa com um blazer em linho que tentei tirar uma mancha em casa e só piorou. A Jô me atendeu com muita simpatia, me passando a segurança que eu precisava de que meu blazer ficaria perfeito. E assim ficou! Retirei hoje, no exato prazo estipulado e ele ficou simplesmente perfeito: sem a mancha, limpinho e muito cheiroso! Amei e com certeza recomendo e voltarei em novas oportunidades 🤍✨", name: "Ana Vogel", city: "Novo Hamburgo" },
  { text: "Foi a primeira vez que levei algo pra lavar lá. Bom trabalho, e ficou pronto antes do tempo previsto. Levei dois tênis da Adidas para lavar e o resultado foi excelente. Devolveram os tênis brilhando, parecia até novos. Serviço de muita qualidade, capricho e ótimo atendimento. Recomendo com certeza!", name: "Ângela", city: "Novo Hamburgo" },
  { text: "Super indico, em 2024 (mandei lavar um edredom na concorrência e ele tava bem amarelo por sem branco e ficar tempo guardado pedi pra lavar de novo e voltou igual) esse ano 2025 mandei lavar aqui com a lavanderia breier pensa que chegou branquinho e cheiroso adorei muito obrigado pelo profissionalismo de vocês agora e só aqui que vamos mandar tanto as da minha mãe quanto as minhas 🙏🏽", name: "Silmara Silveira", city: "Novo Hamburgo" },
  { text: "Lavo tapetes e cobertores com eles há 3 anos e são ótimos! Sempre cumprem o prazo, os tapetes vem limpos, sem manchas e cheirosos.", name: "Michele Penteado", city: "Novo Hamburgo" },
  { text: "Os serviços da lavanderia, super recomendo, excelente trabalho. Parabéns pela excelência, razão pela qual está a mais de 30 anos no mercado.", name: "Paulo Daniel Rogovschi", city: "Novo Hamburgo" },
  { text: "Serviço profissional, de extrema Carinho, com muita dedicação, recomendo sempre. Cliente Fiel", name: "Paulo Ricardo Lima Pereira", city: "Novo Hamburgo" },
] as const;

export const faqs = [
  ["A coleta e entrega tem custo adicional?", "A coleta e entrega em Novo Hamburgo não tem custo de taxa de deslocamento, mas requer um pedido com valor mínimo de R$ 60,00. Basta nos chamar no WhatsApp que agendamos a retirada no seu endereço."],
  ["Quais serviços a lavanderia oferece?", "Realizamos lavagem de roupas (dia a dia e lavagem a seco), limpeza de tapetes e cortinas, higienização de tênis e calçados, linha pet (caminhas e roupinhas), jaquetas de couro e motoqueiro, passadoria profissional e rouparia institucional."],
  ["A Lavanderia Breier possui licenciamento ambiental?", "Sim! A empresa é devidamente licenciada pela Secretaria de Meio Ambiente (SEMAM Novo Hamburgo), cumprindo rigorosamente as normas ambientais municipais com Licença de Operação ativa, produtos biodegradáveis e tratamento adequado."],
  ["Vocês lavam caminhas pet e tênis?", "Sim! Temos processos específicos para calçados esportivos e casuais (com desodorização e secagem controlada) e para a linha pet (utilizando produtos antibacterianos hipoalergênicos e seguros para os animais)."],
  ["Onde fica a lavanderia e quais os números de contato?", "Estamos localizados na Rua Machado de Assis, 431, Ideal, Novo Hamburgo/RS. Atendemos pelo WhatsApp e pelo telefone fixo (51) 3066-9500."],
] as const;
