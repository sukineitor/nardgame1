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
  
    // Verificar si los enlaces de los juegos son válidos
    const playButtons = document.querySelectorAll(".play-btn")
    playButtons.forEach((button) => {
      fetch(button.href, { method: "HEAD" })
        .then((response) => {
          if (!response.ok) {
            button.href = "#"
            button.textContent = "No disponible"
            button.classList.add("disabled")
          }
        })
        .catch(() => {
          button.href = "#"
          button.textContent = "No disponible"
          button.classList.add("disabled")
        })
    })
  })
  
  