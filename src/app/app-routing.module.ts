import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
