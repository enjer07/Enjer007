const gasto = document.getElementById('gastos');
const form = document.getElementById('form');
const gasto2 = document.getElementById('gasto2');
const gasto3 = document.getElementById('gasto3');
const gasto4 = document.getElementById('gasto4');
const gasto5 = document.getElementById('gasto5');



form.addEventListener('submit', e => {
    e.preventDefault()
    const gastoa = parseInt(gasto.value);
    const gastob = parseInt(gasto2.value);
    const gastoc = parseInt(gasto3.value);
    const gastod = parseInt(gasto4.value);
    const gastoe = parseInt(gasto5.value);
    /*console.log(typeof(gasto.value));
    console.log(typeof(gastoi));*/

    if (gastoa || gastob != '') {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['TRABAJO', gastoa],
                ['ALMUERZO', gastob],
                ['RECREACION', gastoc],
                ['EJERCISIOS', gastod],
                ['DORMIR', gastoe]
            ]);

            var options = {
                title: 'MIS ACTIVIDADES DEL DIA',
                is3D: true,
            };

            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

            chart.draw(data, options);
        }
    } else {
        document.getElementById('alert').innerHTML = 'Introduce los Datos '
    }
});