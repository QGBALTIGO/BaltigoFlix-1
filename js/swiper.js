<!-- Incluir os arquivos CSS e JS do Swiper -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<script>
  var swiper = new Swiper('.mySwiper', {
    loop: true, // Define o loop para repetir os slides
    autoplay: {
      delay: 4000, // Atraso de 4 segundos para a troca de slides
      disableOnInteraction: false, // O autoplay não será desativado quando o usuário interagir
    },
    navigation: {
      nextEl: '.swiper-button-next', // Botão de navegação "próximo"
      prevEl: '.swiper-button-prev', // Botão de navegação "anterior"
    },
    pagination: {
      el: '.swiper-pagination', // Paginação dos slides
      clickable: true, // Torna a paginação clicável
    },
    breakpoints: {
      // Responsividade para diferentes tamanhos de tela
      640: {
        slidesPerView: 1, // Exibe 1 slide por vez em telas pequenas
      },
      768: {
        slidesPerView: 2, // Exibe 2 slides por vez em telas médias
      },
      1024: {
        slidesPerView: 3, // Exibe 3 slides por vez em telas grandes
      },
    },
  });
</script>
