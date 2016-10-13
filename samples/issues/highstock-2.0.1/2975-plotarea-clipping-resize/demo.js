$(function () {
    // create the chart
    Highcharts.stockChart('container', {


        rangeSelector: {
            enabled: false
        },

        navigator: {
            enabled: false
        },


        series: [{
            type: 'column',
            data: [4, 2, 3, 1]
        }]
    });


    $('#resize').click(function () {
        document.getElementById('container').highcharts().setSize(400, 400, false);
    });
});