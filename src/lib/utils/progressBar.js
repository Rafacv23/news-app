export const progressBar = () => {
  window.addEventListener("scroll", function () {
    // Calcula el porcentaje de progreso de desplazamiento
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight
    const scrollTop = window.scrollY
    const progress = (scrollTop / scrollableHeight) * 100

    // Actualiza el valor de la barra de progreso
    const progressBar = document.querySelector("progress")
    progressBar.value = progress
  })
}
