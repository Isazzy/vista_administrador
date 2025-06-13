//Scroll encabezado
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

menu.addEventListener("click",()=>{
    sidebar.classList.toggle("menu-toggle");
    menu.classList.toggle("menu-toggle");
    main.classList.toggle("menu-toggle");
});

// Obtener el contexto del elemento canvas donde se renderizará el gráfico
var ctx = document.getElementById('myChart').getContext('2d');

// Crear una nueva instancia del gráfico
var myChart = new Chart(ctx, {
    type: 'line', // Tipo de gráfico: línea (también puede ser 'bar', 'pie', etc.)
    data: {
        // Etiquetas para el eje X (meses del año)
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        // Conjuntos de datos (en este caso, solo uno)
        datasets: [{
            label: 'Ganancias de Ventas por mes', // Leyenda del dataset
            data: [15000, 11000, 12000, 16000, 10000, 19000, 8800, 15000, 3000, 5600, 9700, 14500], // Valores para cada mes
            backgroundColor: ["red", "orange", "yellow"], // Colores de fondo (para gráficos de barras/puntos)
            borderColor: 'black', // Color de la línea del gráfico
            borderWidth: 2 // Grosor de la línea
        }]
    },
    options: {
        // Configuración de los ejes
        scales: {
            y: {
                beginAtZero: true, // El eje Y comienza desde 0
                ticks: {
                    color: 'white' // Color de los números del eje Y
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Color de las líneas de la cuadrícula (eje Y)
                }
            },
            x: {
                ticks: {
                    color: 'white' // Color de las etiquetas del eje X (meses)
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Color de las líneas de la cuadrícula (eje X)
                }
            }
        },
        // Configuración de plugins adicionales
        plugins: {
            legend: {
                display: true, // Mostrar la leyenda
                labels: {
                    color: '#ffc107', // Color del texto de la leyenda (amarillo)
                    font: {
                        size: 14 // Tamaño de la fuente
                    }
                }
            },
            tooltip: {
                enabled: true, // Habilitar tooltips al pasar el mouse
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo del tooltip
                titleColor: '#ffc107', // Color del título del tooltip
                bodyColor: 'white' // Color del contenido del tooltip
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