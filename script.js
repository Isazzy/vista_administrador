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