$(function () {
    QUnit.test('Prevent dense ticks', function (assert) {


        Highcharts.chart('container', {
            "chart": {
                "type": "bar"
            },
            title: {
                text: 'Only first and last axis label should be kept'
            },
            "yAxis": [{
                "labels": {
                    "staggerLines": 1
                },
                "tickInterval": 1
            }],
            "series": [{
                "data": [100000],
                "type": "column"
            }]
        });

        var chart = document.getElementById('container').highcharts();

        assert.strictEqual(
            chart.yAxis[0].tickPositions.length < chart.yAxis[0].len,
            true,
            'Not too many tick positions'
        );

    });
});