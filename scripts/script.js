document.addEventListener('DOMContentLoaded', function () {
    // Inicializar la instancia de ECharts
    var chart = echarts.init(document.getElementById('chart'));
  
    // Configuración de la gráfica de barras
    var option = {
      title: {
        text: 'Habilidades en Software',
        subtext: 'Lenguajes de Prograamación',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Python', 'Java', 'HTML5', 'CSS', 'JAVASCRIPT']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Cantidad',
        type: 'bar',
        data: [100, 70, 100, 80, 80],
        itemStyle: {
          color: '#4CAF50'
        }
      }]
    };
    
    // Inicializar la instancia de ECharts
    var chart2 = echarts.init(document.getElementById('chart2'));
  

    // Configuración de la gráfica Diagrama Circular
    var option2 = {
    title: {
      text: 'Gráfica Circular',
      subtext: 'Datos de ejemplo',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Acceso desde',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Correo Electrónico' },
          { value: 735, name: 'Publicidad por Afiliación' },
          { value: 580, name: 'Publicidad de Video' },
          { value: 484, name: 'Búsqueda Directa' },
          { value: 300, name: 'Búsqueda Orgánica' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


    // Usar la configuración y los datos para mostrar la gráfica
    chart.setOption(option);
    chart2.setOption(option2);
  });