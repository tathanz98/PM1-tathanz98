// Función para restablecer todas las imágenes a su estado original
function resetAllImages() {
    resetImage('img1');
    resetImage('img2');
    resetImage('img3');
  }
  
  // Función para rotar la imagen 1 al hacer clic en ella y restablecerla al hacer clic nuevamente
  document.getElementById('img1').addEventListener('click', function() {
    if (this.style.animation) {
      resetImage('img1');
    } else {
      this.style.animation = 'rotate 2s linear infinite';
    }
  });
  
  // Función para mostrar/ocultar la imagen 2 al hacer clic en ella y restablecerla al hacer clic nuevamente
  document.getElementById('img2').addEventListener('click', function() {
    if (this.style.animation) {
      resetImage('img2');
    } else {
      this.style.animation = 'rotate 2s linear infinite';
    }
  });
  
  // Función para hacer aparecer/desaparecer la imagen 3 al hacer clic en ella y restablecerla al hacer clic nuevamente
  document.getElementById('img3').addEventListener('click', function() {
    if (this.style.opacity === '0') {
      resetImage('img3');
    } else {
      this.style.opacity = '0';
    }
  });
  
  // Función para restablecer la imagen a su estado original
  function resetImage(imageId) {
    var img = document.getElementById(imageId);
    img.style.animation = '';
    img.style.animationPlayState = '';
    img.classList.remove('hidden');
    img.style.opacity = '1';
  }
  
  // Llamar a resetAllImages() para restablecer todas las imágenes al cargar la página
  resetAllImages();
  