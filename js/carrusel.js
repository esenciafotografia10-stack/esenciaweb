
      const carrusel = document.querySelector(".imagenes");
      const imagenes = document.querySelectorAll(".imagenes img");
      const btnPrev = document.querySelector(".anterior");
      const btnNext = document.querySelector(".siguiente");
      const indicadoresBox = document.querySelector(".indicadores");

      // Crear indicadores dinámicos
      imagenes.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("activo");
        indicadoresBox.appendChild(dot);
      });

      const indicadores = document.querySelectorAll(".indicadores span");

      let index = 0;

      function actualizar() {
        carrusel.style.transform = `translateX(${-index * 100}%)`;

        indicadores.forEach((dot, i) =>
          dot.classList.toggle("activo", i === index)
        );
      }

      btnPrev.onclick = () => {
        index = index === 0 ? imagenes.length - 1 : index - 1;
        actualizar();
      };

      btnNext.onclick = () => {
        index = index === imagenes.length - 1 ? 0 : index + 1;
        actualizar();
      };

      indicadores.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          index = i;
          actualizar();
        });
      });
 