import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { OverviewService } from '../../overview.service';
import { Transaction } from '../../interfaces/transaction.interface';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;
  private transactions: Transaction[] = [];
  private incomeTransactions: Transaction[] = [];
  private expenseTransactions: Transaction[] = [];
  private currentAccountNumber: string = '';

  constructor(private overviewService: OverviewService) {
    this.chartOptions = {
      series: [
        {
          name: 'My Serie',
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      title: {
        text: 'Incomes and Expenses',
      },
      xaxis: { type: 'datetime' },
    };
  }

  ngOnInit(): void {
    this.overviewService.currentState.subscribe((accountNumber) => {
      this.currentAccountNumber = accountNumber;

      this.incomeTransactions = this.transactions.filter(
        (transaction) =>
          transaction.destinationAccount.accountNumber ===
            this.currentAccountNumber && transaction.status === 'completed'
      );
      this.expenseTransactions = this.transactions.filter(
        (transaction) =>
          transaction.sourceAccount.accountNumber ===
            this.currentAccountNumber && transaction.status === 'completed'
      );

      this.updateChart();
    });

    this.overviewService.transactions.subscribe((transactions) => {
      this.transactions = transactions;
    });
  }

  updateChart() {
    this.chartOptions.series = [
      {
        name: 'Incomes',
        data: this.incomeTransactions.map((transactions) => ({
          x: new Date(transactions.createdAt).getTime(),
          y: transactions.amount,
        })),
      },
      {
        name: 'Expenses',
        data: this.expenseTransactions.map((transactions) => ({
          x: new Date(transactions.createdAt).getTime(),
          y: transactions.amount,
        })),
      },
    ];
  }
}
