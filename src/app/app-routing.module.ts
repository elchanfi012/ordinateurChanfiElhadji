import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { ComputerDetailComponent } from './components/computer-detail/computer-detail.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';


const routes: Routes = [
  { path: '', redirectTo: 'computers', pathMatch: 'full'},
  { path: 'computers', component: DashboardComponent },
  { path: 'computer/ajout', component: AddComputerComponent },
  { path: 'computer/:id', component: ComputerDetailComponent },
  { path: 'computer/edit/:id', component: EditComputerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
