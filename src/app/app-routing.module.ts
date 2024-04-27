import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},

  {path: 'summary',component: PortfolioSummaryComponent, canActivate: [AuthenticationGuard]},
  {path: 'login',component: LoginComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
