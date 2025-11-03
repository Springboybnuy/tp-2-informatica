document.addEventListener('DOMContentLoaded', function() {
      
  // Seleccionamos los elementos usando querySelector 
  const boton = document.querySelector('#toggleBotonGaleria');
  const galeria = document.querySelector('#galeriaIntegrantes');

  // Buena práctica: nos aseguramos de que ambos elementos existan
  if (boton && galeria) {
    
    boton.addEventListener('click', function() {
      
      // Comprobamos el estado actual de la galería
      if (galeria.style.display === 'none') {
        // Si está oculta, la mostramos cambiando 'display' a 'block'
        galeria.style.display = 'block';
        boton.textContent = 'Ocultar Galería'; // Cambiamos el texto del botón
      } else {
        // Si está visible, la ocultamos cambiando 'display' a 'none'
        galeria.style.display = 'none';
        boton.textContent = 'Ver más'; // Devolvemos el texto original
      }
    });

  } else {
    // Opcional: un mensaje en la consola si no se encuentran los IDs
    console.error('No se pudo encontrar el botón o la galería.');
  }
  
});