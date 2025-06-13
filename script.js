const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

menu.addEventListener("click",()=>{
    sidebar.classList.toggle("menu-toggle");
    menu.classList.toggle("menu-toggle");
    main.classList.toggle("menu-toggle");
});
// Seleccionamos las clases "counter"
const counters = document.querySelectorAll('.counter');
// Recorremos cada contador 
counters.forEach(counter => {
    // Obtenemos el número final de data-target 
    const target = +counter.getAttribute('data-target');
    // tipo de formato que debe usar (money o none)
    const format = counter.getAttribute('data-format') || 'none';
    // contador cero
    let count = 0;
    // Tiempo de la animación (ml)
    const duration = 2000;
    // pasos en los que se va a dividir la animación
    const steps = 100;
    // Cuánto debe aumentar en cada paso
    const increment = target / steps;
    // espera entre cada paso
    const delay = duration / steps;
    // actualiza el número mostrado
    const updateCounter = () => {
        // Aumentamos el contador 
        count += increment;
        // le agregamos el signo $ y puntos
        if (format === 'money') {
            displayValue = `$${Math.floor(count).toLocaleString('es-AR')}`;
        } else {
            //  solo mostramos el número normal
            displayValue = `${Math.floor(count)}`;
        }

        // Mostramos el valor en el HTML
        counter.innerText = displayValue;

        // Si todavía no llegamos al número final, volvemos a llamar a esta función
        if (count < target) {
            setTimeout(updateCounter, delay);
        }
    };

    // Empezamos la animación para este contador
    updateCounter();
});
