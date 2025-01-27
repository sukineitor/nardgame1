document.addEventListener("DOMContentLoaded", () => {
    const themeButtons = document.querySelectorAll(".theme-btn")
    const images = document.querySelectorAll(".game-card img")
  
    // Cambiar tema
    themeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        document.body.className = `theme-${button.dataset.theme}`
      })
    })
  
    // Manejar imágenes que no se cargan
    images.forEach((img) => {
      img.onerror = function () {
        this.src = "https://via.placeholder.com/300x200.png?text=Imagen+No+Disponible"
      }
    })
  

  })
  
  
