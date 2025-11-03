function setFocus() {
  const main = document.getElementById("mainContent");
  main.focus();
}

function loadHome() {
  document.getElementById("mainContent").innerHTML = `
    <h1>Inicio</h1>
    <p>Bienvenido a mi página SPA!!.</p>
    <p>Explora todas las secciones de la página :D.</p>
  `;
  setFocus();
}

function loadAbout() {
  document.getElementById("mainContent").innerHTML = `
    <h1>Sobre Nosotros</h1>
    <p>Somos una organización dedicada a crear experiencias web accesibles y sostenibles.</p>
    <p>Se uso prácticas de accesibilidad para todos los usuarios.</p>
  `;
  setFocus();
}

function loadContact() {
  document.getElementById("mainContent").innerHTML = `
    <h1>Contacto</h1>
    <p>Escríbenos a <a href="mailto:info@spa.com">info@spa.com</a> para más información.</p>
    <p>También puedes seguirnos en nuestras redes sociales.</p>
  `;
  setFocus();
}
