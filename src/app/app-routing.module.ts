import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
  { path: 'home', component: AccueilPageComponent},
  { path: 'form-page', component: FormPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
