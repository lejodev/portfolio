import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlogComponent } from './components/blog/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
  declarations: [
    // BlogComponent,
    // PostListComponent,
    // PostDetailComponent
    // PostListComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BlogComponent }
    ]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ]
})
export class BlogModule { }
