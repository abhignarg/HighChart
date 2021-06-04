import { options } from 'highcharts';

export const donutChartOptions: Options = {
  chart: {
    type: 'pie',
    plotShadow: 'false'
  },
  cradits: {
    enabled: 'false'
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLables: {
        connectorWidth: 0
      }
    }
  },
  title: {
    verticalAlign: 'middle',
    floting: true,
    text: '$ 500,000,00'
  },
  legend: {
    enabled: false
  },
  sereis: [
    {
      type: 'pie',
      data: [
        { name: 'a', y: 1, color: 'lightblue' },
        { name: 'b', y: 2, color: 'blue' },
        { name: 'c', y: 3, color: 'lightyellow' },
        { name: 'd', y: 4, color: 'cyan' },
        { name: 'e', y: 5, color: 'orange' },
        { name: 'f', y: 6, color: 'lightgreen' }
      ]
    }
  ]
};
