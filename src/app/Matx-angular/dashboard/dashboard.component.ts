import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProductService } from '../service/product.service';
import { Product } from '../domain/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  ngOnInit(): void {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };


    this.options = {
        cutout: '60%',
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        }
    };














 
    Chart.register(...registerables);

    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [{
            label: 'Sales',
            data: [35, 44, 31, 45, 31, 42, 26, 43, 31, 45, 33, 39],
            borderColor: '#ffffff',
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            pointBackgroundColor: '#ffffff',
            pointRadius: 4,
            cubicInterpolationMode: 'monotone',
            tension: 0.4 // Smooth line curve
          }]
        },
        options: {
          responsive: true,
          layout: {

          },
          scales: {
            y: {
              min: 10,             // Minimum value on y-axis
              max: 60,             
              beginAtZero: false,
              ticks: {
                stepSize: 10, 
                color: '#ffffff'
              },
              grid: {
                display: true,
                color: 'rgba(255, 255, 255, 0.2)'
                // color: 'rgba(255, 255, 255, 0.2)'
              }
            },
            x: {
              
              ticks: {
                color: '#ffffff'
              },
              grid: {
                display: false,
                color: '#ffffff'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    } else {
      console.error('Failed to get 2D context from canvas');
    }
  }


products = [
  { name: 'Earphone', revenue: 100, stockStatus: '15 available', },
  { name: 'Earphone', revenue: 1500, stockStatus: 'in stock', },
  { name: 'IPhone X', revenue: 1900, stockStatus: 'in stock',},
  { name: 'IPhone X', revenue: 100, stockStatus: 'out of stock'},
  { name: 'Earphone', revenue: 100, stockStatus: '15 available', },
];
// checkbox
value: boolean | null = null;

data: any;

options: any;

// ngOnInit() {
    // const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');

    // this.data = {
    //     labels: ['A', 'B', 'C'],
    //     datasets: [
    //         {
    //             data: [300, 50, 100],
    //             backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
    //             hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
    //         }
    //     ]
    // };


    // this.options = {
    //     cutout: '60%',
    //     plugins: {
    //         legend: {
    //             labels: {
    //                 color: textColor
    //             }
    //         }
    //     }
    // };
}





