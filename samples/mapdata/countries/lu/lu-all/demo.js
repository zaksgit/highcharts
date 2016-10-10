$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "lu-di",
            "value": 0
        },
        {
            "hc-key": "lu-gr",
            "value": 1
        },
        {
            "hc-key": "lu-lu",
            "value": 2
        }
    ];

    // Initiate the chart
    Highcharts.mapChart('container', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/lu/lu-all.js">Luxembourg</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/lu/lu-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
