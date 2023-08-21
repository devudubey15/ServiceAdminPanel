import { Component, OnInit, ViewChild } from '@angular/core';
import { BranchDetailService } from '../../../services/branch/branch-detail.service'
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexGrid
  
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chartSeries: ApexAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors:String[];
  stroke:ApexStroke;
  fill:ApexFill;
  legend:ApexLegend;
  dataLabels:ApexDataLabels;
  plotOptions:ApexPlotOptions;
  tooltip:ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
};
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public visitsOverviewOptions: Partial<ChartOptions> 
   branchData :any = {};
   data :any = [];
   categories:any =[];
   monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor(
    private __branchService:BranchDetailService
  ) { }

  ngOnInit(): void {
    this.getData(localStorage.getItem("Auth_id"))
  }
  
   getData(id : any){
     this.__branchService.getBranchDetail(id).subscribe((res)=>{
      //this.branchData = res[0].payload.doc.data();
        this.branchData = res;
        console.log(res);
        this.visitsOverviewChart(this.branchData.finantial);
     })
   }

   updateData( financial){
     var monthNumber = financial.length;
     var profit =  this.branchData.worth.billing -( this.branchData.worth.employee_expence +  this.branchData.worth.goods_other_expence);
       if(monthNumber <=11){
           this.branchData.worth.billing = 0;
           this.branchData.worth.employee_expence = 0;
           this.branchData.worth.goods_other_expence = 0;
           this.branchData.financial.push({month:this.monthList[monthNumber], profit:profit})
       }else{
         this.branchData.financial = [];
       }
      this.__branchService.updateBranchDetail(localStorage.getItem("Auth_id"), this.branchData);
   }

  visitsOverviewChart( financial :any){
    this.data = [];
    this.categories = [];
    for(var i=0;i<financial.length;i++){
      this.data.push(financial[i].profit)
      this.categories.push(financial[i].month)
    }
    this.visitsOverviewOptions = {
      chart: {
        height: 450,
        type: 'bar',
        id:'visitsBar',
        stacked: false,
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#fafafa7a',
          opacity: 0.35,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [ '#21b6a8'],
      chartSeries: [
        {
          name: 'Net Worth',
          type: 'column',
          data: this.data,
        }

      ],
      stroke: {
        show: false,
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          borderRadius: 2,
          dataLabels: {
            position: 'top',
          },
        },
      },
      xaxis: {
        categories: this.categories,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: ' #3B3B3E',
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
          color: ' #3B3B3E',
        }
      },
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX:10,
      },
      grid:{
        show:true,
        borderColor: '#2E2D31',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show:false,
          }
        },
      
       }
    };
  }
}
