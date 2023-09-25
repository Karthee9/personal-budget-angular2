import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import * as d3 from 'd3';
// import { DataService } from '../data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  width = 600;
  height = 300;
  radius = Math.min(this.width, this.height) / 2;
  svg:any;
  color:any;
  pie:any;
  keya:any;
  arc:any;
  outerArc:any;
  dataReady: any;

  dataSource:any = {
    datasets: [
      {
        data: [],
        backgroundColor: [
                '#7D3C98',
                '#2ECC71',
                '#F633FF',
                '#D35400',
                '#ffcd56',
                '#ff6384',
                '#17202A',
        ],
      },
    ],
    labels: [],
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // async data update from data service using setTimeOut

    this.get('http://localhost:3000' + '/budget').subscribe((res: any) => {
      console.log('server res', res);
      for (let i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
    });


        // setTimeout(() => {
            this.dataSource = this.dataSource;
            this.createChart();
            // this.draw();
          // }, 1000);
  }

  private createChart(): void {
    const ctx:any = document.getElementById('myChart');
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource,
    });
  }


}
