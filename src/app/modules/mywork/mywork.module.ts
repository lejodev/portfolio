import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyworkComponent } from './mywork.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MyworkComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MyworkModule { }
