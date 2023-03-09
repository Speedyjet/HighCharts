window.InitializeTable = (sourceArray, title) => {
    console.log(sourceArray);
    Highcharts.chart('container', {

        title: {
            text: title,
            align: 'left'
        },

        subtitle: {
            text: sourceArray.latitude,
            align: 'right'
        },
      
        yAxis: {
            title: {
                text: 'Temperature, C'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            }
        },

        //legend: {
        //    layout: 'vertical',
        //    align: 'right',
        //    verticalAlign: 'middle'
        //},

        plotOptions: {
            series: {
                name: sourceArray.hourly_units.temperature_2m,
                data: sourceArray.hourly.time,
            }
        },

        series: [{
            data: sourceArray.hourly.temperature_2m
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
};