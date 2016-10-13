$(function () {
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 1
        },

        series: [{
            name: 'USD to EUR',
            data: usdeur
        }]
    });

    $('#button').click(function () {
        var chart = document.getElementById('container').highcharts();
        chart.print();
    });
});
