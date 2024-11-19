import { Component, Input, HostListener } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

interface Product {
  name: string;
  revenue: number;
  stockStatus: string;
}
interface Project {
  id: number;
  date: string;
  images: string[]; // Array of image URLs for participants
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  isSidebarOpen = false; // Tracks sidebar visibility

  constructor(private elementRef: ElementRef) {
    function toggleSidebar() {
      const content = document.querySelector('.content');
      content?.classList.toggle('sidebar-active');
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggles the sidebar
    const sidebar = document.getElementById('sidebar') as any;
    const backdrop = document.querySelector('.offcanvas-backdrop') as any;

    sidebar.classList.toggle('show');
    backdrop?.classList.toggle('noshow');
  }

  closeSidebar() {
    this.isSidebarOpen = false; // Closes the sidebar
  }

  // Detect clicks on the document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    // Close the sidebar if the click is outside the sidebar
    if (this.isSidebarOpen && !this.elementRef.nativeElement.contains(targetElement)) {
      this.closeSidebar();
    }
  }


  // toggleSidebar() {
  //   const sidebar = document.getElementById('sidebar') as any;
  //   const backdrop = document.querySelector('.offcanvas-backdrop') as any;

  //   sidebar.classList.toggle('show');
  //   backdrop?.classList.toggle('show');
  // }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const sidebar = document.getElementById('sidebar');
    const button = document.querySelector('.navbar button');
    if (sidebar && !sidebar.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
      this.toggleSidebar(); // Close sidebar when clicking outside
    }
  }







  ngOnInit(): void {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--blue-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--blue-400')]
        }
      ]
    };


    this.options = {
      cutout: '80%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };















    //   Chart.register(...registerables);

    //   const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    //   const ctx = canvas?.getContext('2d');

    //   if (ctx) {
    //     new Chart(ctx, {
    //       type: 'line',
    //       data: {
    //         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    //         datasets: [{
    //           label: 'Sales',
    //           data: [35, 44, 31, 45, 31, 42, 26, 43, 31, 45, 33, 39],
    //           borderColor: '#ffffff',
    //           borderWidth: 1,
    //           fill: true,
    //           backgroundColor: 'rgba(255, 255, 255, 0.1)',
    //           pointBackgroundColor: '#ffffff',
    //           pointRadius: 2,
    //           cubicInterpolationMode: 'monotone',
    //           tension: 0.4
    //         }]
    //       },
    //       options: {
    //         responsive: true,
    //         layout: {

    //         },
    //         scales: {
    //           y: {
    //             min: 10,
    //             max: 60,
    //             beginAtZero: false,
    //             ticks: {
    //               stepSize: 10,
    //               color: '#ffffff'
    //             },
    //             grid: {
    //               display: true,
    //               color: 'rgba(255, 255, 255, 0.2)'
    //             }
    //           },
    //           x: {

    //             ticks: {
    //               color: '#ffffff'
    //             },
    //             grid: {
    //               display: false,
    //               color: '#ffffff'
    //             }
    //           }
    //         },
    //         plugins: {
    //           legend: {
    //             display: false
    //           }
    //         }
    //       }
    //     });
    //   } else {
    //     console.error('Failed to get 2D context from canvas');
    //   }
  }


  products = [
    { name: 'Earphone', revenue: 100, stockStatus: '15 available', },
    { name: 'Earphone', revenue: 1500, stockStatus: 'in stock', },
    { name: 'IPhone X', revenue: 1900, stockStatus: 'in stock', },
    { name: 'IPhone X', revenue: 100, stockStatus: 'out of stock' },
    { name: 'Earphone', revenue: 100, stockStatus: '15 available', },
  ];
  // checkbox
  value: boolean | null = null;

  data: any;

  options: any;
  progressValue = 50;
  updateProgress(value: number) {
    this.progressValue = value;
  }
}




























// document.addEventListener('DOMContentLoaded', function () {
//   Highcharts.chart('container', {
//     chart: {
//       type: 'spline',
//       backgroundColor: '#8a4fff',
//     },
//     title: {
//       text: 'Last 12 Months Sales',
//       style: {
//         color: '#8a4fff',
//       }
//     },
//     xAxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//       labels: {
//         style: {
//           color: '#ffffff',
//           borderColor: '#8a4fff', 
//           borderWidth: 2, 
//           backgroundColor: '#f4f4f4',
//           spacingTop: 20,
//           spacingRight: 30, 
//           spacingBottom: 40,
//           spacingLeft: 50,
//         }
//       }
//     },
//     yAxis: {
//       min: 10,
//       max: 60,
//       title: {
//         text: null
//       },
//       labels: {
//         style: {
//           display: true,
//           color: '#ffffff'
//         }
//       }
//     },
//     series: [
//       {
//         name: 'Sales',
//         type: 'spline',
//         data: [35, 44, 31, 45, 31, 42, 26, 43, 31, 45, 33, 39],
//         color: '#ffffff',
//         marker: {
//           radius: 1,
//           fillColor: '#ffffff',
//           fillOpacity: 0.3 
//         }
//       }
//     ],
//     plotOptions: {
//       spline: {
//         lineWidth: 1,
//         dataLabels: {
//           enabled: false,

//         }
//       }
//     },
//     credits: {
//       enabled: false,
//     }
//   });
// });












// temperature
document.addEventListener('DOMContentLoaded', () => {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
      inverted: true,
      backgroundColor: '#8a4fff',
      borderColor: '#ffffff'

    },
    title: {
      align: 'left',
      style: {
        color: '#ffffff',
        fontSize: '16px',
      },

    },
    subtitle: {
      align: 'left',
    },
    xAxis: {
      reversed: false,
      title: {
        text: 'Altitude',
        style: {
          color: '#ffffff',
          fontSize: '16px',
        },
      },
      labels: {
        format: '{value} km',
        style: {
          color: 'white'
        }
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 80 km.',
      },
      maxPadding: 0.05,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: 'Temperature',
        style: {
          color: '#ffffff',
          fontSize: '16px',
        },
      },
      labels: {
        format: '{value}°',
        style: {
          color: '#ffffff',
        },
      },
      accessibility: {
        rangeDescription: 'Range: -90°C to 20°C.',
      },
      lineWidth: 2,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x} km: {point.y}°C',
      style: {
        color: '#000000',
      },
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Temperature',
        data: [
          [0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
          [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5],
        ],
        color: '#ffffff',
        type: 'spline',
      },
    ],
  };

  Highcharts.chart('container', chartOptions);
});



// US and USSR nuclear stockpiles

document.addEventListener('DOMContentLoaded', () => {
  const chartOptions: Highcharts.Options = {
      chart: {
          type: 'area'
      },
      accessibility: {
          description: 'Image description: An area chart compares the nuclear ' +
              'stockpiles of the USA and the USSR/Russia between 1945 and ' +
              '2024. The number of nuclear weapons is plotted on the Y-axis ' +
              'and the years on the X-axis. The chart is interactive, and the ' +
              'year-on-year stockpile levels can be traced for each country. ' +
              'The US has a stockpile of 2 nuclear weapons at the dawn of the ' +
              'nuclear age in 1945. This number has gradually increased to 170 ' +
              'by 1949 when the USSR enters the arms race with one weapon. At ' +
              'this point, the US starts to rapidly build its stockpile ' +
              'culminating in 31,255 warheads by 1966 compared to the USSR’s 8,' +
              '400. From this peak in 1967, the US stockpile gradually ' +
              'decreases as the USSR’s stockpile expands. By 1978 the USSR has ' +
              'closed the nuclear gap at 25,393. The USSR stockpile continues ' +
              'to grow until it reaches a peak of 40,159 in 1986 compared to ' +
              'the US arsenal of 24,401. From 1986, the nuclear stockpiles of ' +
              'both countries start to fall. By 2000, the numbers have fallen ' +
              'to 10,577 and 12,188 for the US and Russia, respectively. The ' +
              'decreases continue slowly after plateauing in the 2010s, and in ' +
              '2024 the US has 3,708 weapons compared to Russia’s 4,380.'
      },
      title: {
          text: 'US and USSR nuclear stockpiles'
      },
      subtitle: {
          text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
              'target="_blank">FAS</a>'
      },
      xAxis: {
          allowDecimals: false,
          accessibility: {
              rangeDescription: 'Range: 1940 to 2024.'
          }
      },
      yAxis: {
          title: {
              text: 'Nuclear weapon states'
          }
      },
      tooltip: {
          pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>' +
              'warheads in {point.x}'
      },
      plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
      series: [{
          type: 'area',  // Ensure 'type' is set to 'area'
          name: 'USA',
          data: [
              null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
              1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
              28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
              26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
              23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
              21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
              10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
              5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
              3750, 3708, 3708, 3708, 3708
          ]
      }, {
          type: 'area',  // Ensure 'type' is set to 'area'
          name: 'USSR/Russia',
          data: [
              null, null, null, null, null, null, null, null, null,
              1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
              3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
              14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
              32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
              32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
              13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
              5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
              4310, 4495, 4477, 4489, 4380
          ]
      }]
  };

  Highcharts.chart('container', chartOptions);
});








//  corn wheat

document.addEventListener('DOMContentLoaded', () => {
  const chartOptions: Highcharts.Options = {
      chart: {
          renderTo: 'container', 
          type: 'column',
          backgroundColor:'#8a4fff',
          
      },
      title: {
          text: 'Corn vs wheat estimated production for 2023',
          align: 'left',
          style:{
            color:'#ffffff'
          }
      },
      subtitle: {
          text:
              'Source: <a target="_blank" ' +
              'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
          align: 'left',
          style:{
            color:'#ffffff'
          }
      },
      xAxis: {
          categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
          crosshair: true,
          accessibility: {
              description: 'Countries',
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: '1000 metric tons (MT)',
              style:{
                color:'#ffffff'
              }
          }
      },
      tooltip: {
          valueSuffix: ' (1000 MT)',
          style:{
            color:'#ffffff'
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0,
          }
      },
      series: [
          {
              type: 'column',
              name: 'Corn',
              data: [387749, 280000, 129000, 64300, 54000, 34300]
          },
          {
              type: 'column',
              name: 'Wheat',
              data: [45321, 140000, 10000, 140500, 19500, 113500]
          }
      ]
  };
  Highcharts.chart(chartOptions);
});





document.addEventListener('DOMContentLoaded', () => {
  const chartOptions: Highcharts.Options = {
      chart: {
          type: 'column',
          renderTo: 'container', 
          backgroundColor: '#8a4fff'
      },
      title: {
          text: "World's largest cities per 2021"
      },
      subtitle: {
          text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>'
      },
      xAxis: {
          type: 'category',
          labels: {
              autoRotation: [-45, -90],
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif',
                  color:'#ffffff'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)'
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
      },
      series: [
          {
              type: 'column', 
              name: 'Population',
              colorByPoint: true,
              groupPadding: 0,
              data: [
                  ['Tokyo', 37.33],
                  ['Delhi', 31.18],
                  ['Shanghai', 27.79],
                  ['Sao Paulo', 22.23],
                  ['Mexico City', 21.91],
                  ['Dhaka', 21.74],
                  ['Cairo', 21.32],
                  ['Beijing', 20.89],
                  ['Mumbai', 20.67],
                  ['Osaka', 19.11],
                  ['Karachi', 16.45],
                  ['Chongqing', 16.38],
                  ['Istanbul', 15.41],
                  ['Buenos Aires', 15.25],
                  ['Kolkata', 14.974],
                  ['Kinshasa', 14.970],
                  ['Lagos', 14.86],
                  ['Manila', 14.16],
                  ['Tianjin', 13.79],
                  ['Guangzhou', 13.64]
              ],
              dataLabels: {
                  enabled: true,
                  rotation: -90,
                  color: '#FFFFFF',
                  inside: true,
                  verticalAlign: 'top',
                  format: '{point.y:.1f}', 
                  y: 10, 
                  style: {
                      fontSize: '13px',
                      fontFamily: 'Verdana, sans-serif'
                  }
              }
          }
      ]
  };
  Highcharts.chart(chartOptions);
});



document.addEventListener('DOMContentLoaded', () => {
  const chartOptions: Highcharts.Options = {
      chart: {

          plotShadow: false,
          type: 'pie',
          backgroundColor:'#8a4fff'
      },
      title: {
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          type: 'pie',  
          name: 'Brands',
          data: [{
              name: 'Chrome',
              y: 74.77,
              sliced: true,
              selected: true
          }, {
              name: 'Edge',
              y: 12.82
          }, {
              name: 'Firefox',
              y: 4.63
          }, {
              name: 'Safari',
              y: 2.44
          }, {
              name: 'Internet Explorer',
              y: 2.02
          }, {
              name: 'Other',
              y: 3.28
          }]
      }]
  };
  Highcharts.chart('container', chartOptions);
});






























