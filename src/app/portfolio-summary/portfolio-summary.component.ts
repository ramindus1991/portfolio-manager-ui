import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { LoginService } from '../common/service/LoginService';
import { SummaryPage } from './model/summary-page';
import { Position } from './model/position';
import { Audit } from './model/audits';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrl: './portfolio-summary.component.scss'
})
 
export class PortfolioSummaryComponent implements OnInit  {

   summaryPage: SummaryPage = {
    customerName: '',
    portfolioNumber: 0,
    portfolioValue: 0,
    currentPerformance: '',
    investmentStrategy: '',
    positions : []
  };

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

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
  ) { 
    this.summaryPage.customerName = loginService?.user?.customerName;
   
  }
  



}
