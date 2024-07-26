import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
  imports: [ChartModule],
})
export class AdminDashboardComponent implements OnInit{
  basicData: any;

  basicOptions: any;

    data: any;

    options: any;


  ngOnInit() {
      const documentStyleChart = getComputedStyle(document.documentElement);
      const textColorChart = documentStyleChart.getPropertyValue('--text-color');
      const textColorChartSecondary = documentStyleChart.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyleChart.getPropertyValue('--surface-border');

      this.basicData = {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
              {
                  label: 'Sales',
                  data: [540, 325, 702, 620],
                  backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  borderWidth: 1
              }
          ]
      };

      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: textColorChart
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorChartSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorChartSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };

  }

}
