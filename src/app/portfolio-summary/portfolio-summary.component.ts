import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { SummaryPage } from './model/summary-page';
import { Position } from './model/position';
import { Audit } from './model/audits';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddTradePopupComponent } from '../add-trade-popup/add-trade-popup.component';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrl: './portfolio-summary.component.scss',
  providers: [DialogService]

})
 
export class PortfolioSummaryComponent implements OnInit  {

  ref: DynamicDialogRef | undefined;


   summaryPage: SummaryPage = {
    customerName: '',
    portfolioNumber: 0,
    portfolioValue: 0,
    currentPerformance: '',
    investmentStrategy: '',
    positions : []
  };


  constructor(
    private http: HttpClient,
    public dialogService: DialogService
  ) {
    const cusname:any= localStorage.getItem("data2");
    this.summaryPage.customerName = cusname;
   
  }

  audit: Audit[] = []

  positions : Position[]= []

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/customer').pipe().subscribe(data => {
      this.summaryPage.portfolioNumber = data.portfolioNumer;
      this.summaryPage.portfolioValue = data.portfolioValue;     

      this.summaryPage.currentPerformance = data.currentPerfance;     

      this.summaryPage.investmentStrategy = data.investmentStratedgy;     

    })

    this.http.get<Position[]>('http://localhost:3000/positions').pipe().subscribe(data => {
      this.positions = data;
    })

    this.http.get<Audit[]>('http://localhost:3000/audits').pipe().subscribe(data => {
      this.audit = data;
    })

  }

  
  showDialog() {
    this.ref = this.dialogService.open(AddTradePopupComponent, {
      header: 'Add Trade',
      width: '400vw',
      modal:true,
      height: '100vw',
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
  });
  }
    


}
