import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component'


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
    path: 'personal-info',
    component: PersonalComponent,
  },
  {
    path: 'professional-info',
    component: ProfessionalComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
