import { Component,Input , HostListener } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ElementRef } from '@angular/core';

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
              borderWidth: 1,
              fill: true,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              pointBackgroundColor: '#ffffff',
              pointRadius: 2,
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
   progressValue = 50; 
      updateProgress(value: number) {
        this.progressValue = value;
      }
  }
  



