import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/components/projects/projects.component';
import { BlogComponent } from '../blog/components/blog/blog.component';
import { PostListComponent } from '../blog/components/post-list/post-list.component';
import { AboutComponent } from '../about/components/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    PostListComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    PostListComponent,
    AboutComponent
  ]
})
export class HomeModule { }
