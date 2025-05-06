import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/components/home/home.component';
import { HomeModule } from './modules/home/home.module';
// import { ProjectsComponent } from './modules/projects/components/projects/projects.component';
// import { BlogComponent } from './modules/blog/components/blog/blog.component';
import { AboutComponent } from './modules/about/components/about/about.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';
import { ProjectsModule } from './modules/projects/projects.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    SharedModule,
    // ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
