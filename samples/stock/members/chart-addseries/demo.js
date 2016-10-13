$(function () {
    Highcharts.stockChart('container', {

        scrollbar: {
            enabled: true
        },

        navigator: {
            enabled: true
        },

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
        chart.addSeries({
            name: 'ADBE',
            data: ADBE
        });
        $(this).attr('disabled', true);
    });
});
