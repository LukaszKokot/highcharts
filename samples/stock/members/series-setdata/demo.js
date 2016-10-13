$(function () {
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 1
        },

        series: [{
            name: 'MSFT',
            data: MSFT
        }]
    });

    $('#button').click(function () {
        var chart = document.getElementById('container').highcharts();
        chart.series[0].setData(ADBE);
        this.disabled = true;
    });
});