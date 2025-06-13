const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

menu.addEventListener("click",()=>{
    sidebar.classList.toggle("menu-toggle");
    menu.classList.toggle("menu-toggle");
    main.classList.toggle("menu-toggle");
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar', // Puedes cambiar a bar, pie, etc.
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril',"Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        datasets: [{
            label: 'Ventas',
            data: [15000, 11000, 12000, 16000,10000,19000,8800,15000,3000,5600,9700,14500],
            backgroundColor: ["red","orange","yellow"],
            borderColor: 'black',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    fontColor: 'black', // Cambia el color de las etiquetas del eje Y
                        }
                },
            x: {
                ticks: {
                    fontColor: 'black', // Cambia el color de las etiquetas del eje X
                        }
                }
        },
        legend: {
            labels: {
                fontColor: 'black' // Cambia el color de las etiquetas de la leyenda
            }
        }
    }
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
