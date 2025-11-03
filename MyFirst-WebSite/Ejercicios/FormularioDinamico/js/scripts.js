document.addEventListener("DOMContentLoaded", function() {
  const categoria = document.getElementById("categoria");
  const camposAdicionales = document.getElementById("camposAdicionales");

  categoria.addEventListener("change", function() {
    const valor = categoria.value;
    camposAdicionales.innerHTML = "";

    if (valor === "libros") {
      camposAdicionales.innerHTML = `
        <fieldset>
          <legend>Información del Libro</legend>
          <label for="autor">Autor:</label>
          <input type="text" id="autor" name="autor" required>

          <label for="editorial">Editorial:</label>
          <input type="text" id="editorial" name="editorial">
        </fieldset>
      `;
    } else if (valor === "peliculas") {
      camposAdicionales.innerHTML = `
        <fieldset>
          <legend>Información de la Película</legend>
          <label for="director">Director:</label>
          <input type="text" id="director" name="director" required>

          <label for="anio">Año de estreno:</label>
          <input type="number" id="anio" name="anio" min="1900" max="2025">
        </fieldset>
      `;
    } else if (valor === "musica") {
      camposAdicionales.innerHTML = `
        <fieldset>
          <legend>Información Musical</legend>
          <label for="artista">Artista o Banda:</label>
          <input type="text" id="artista" name="artista" required>

          <label for="genero">Género musical:</label>
          <input type="text" id="genero" name="genero">
        </fieldset>
      `;
    }
  });
});
