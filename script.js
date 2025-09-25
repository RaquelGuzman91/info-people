
document.querySelectorAll('.card-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    const banner = document.getElementById('banner');
    const servicios = document.getElementById('servicios');
    const nosotros = document.getElementById('nosotros');

    // Aplica el efecto de deslizamiento
    servicios.classList.add('slide-up');

    // Espera a que termine el deslizamiento antes de desvanecer
    setTimeout(() => {
      banner.classList.add('fade-out');
      servicios.classList.add('fade-out');
      nosotros.classList.add('fade-out');
    }, 600); // Coincide con el tiempo de slide-up

    // Redirige después de que todo se haya animado
    setTimeout(() => {
      window.location.href = this.href;
    }, 1400); // slide-up + fade-out
  });
});



