import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'work', component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
