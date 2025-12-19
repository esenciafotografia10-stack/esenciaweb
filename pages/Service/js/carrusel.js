
    document.addEventListener("DOMContentLoaded", () => {
      const carrusel = document.querySelector(".carrusel");
      const imagenes = carrusel.querySelectorAll(".imagenes img");
      const btnAnterior = carrusel.querySelector(".anterior");
      const btnSiguiente = carrusel.querySelector(".siguiente");
      const indicadores = carrusel.querySelectorAll(".indicadores span");

      let indice = 0;

      function mostrarImagen(i) {
        // Limitar el índice
        if (i < 0) indice = imagenes.length - 1;
        else if (i >= imagenes.length) indice = 0;
        else indice = i;

        // Mover las imágenes
        const offset = -indice * 100; // 100% por imagen
        carrusel.querySelector(".imagenes").style.transform = `translateX(${offset}%)`;

        // Actualizar indicadores
        indicadores.forEach((span, j) => {
          span.classList.toggle("activo", j === indice);
        });
      }

      // Botones
      btnAnterior.addEventListener("click", () => mostrarImagen(indice - 1));
      btnSiguiente.addEventListener("click", () => mostrarImagen(indice + 1));

      // Indicadores clicables
      indicadores.forEach((span, i) => {
        span.addEventListener("click", () => mostrarImagen(i));
      });

      // Inicializar
      mostrarImagen(indice);
    });
 