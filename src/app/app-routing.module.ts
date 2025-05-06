import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { PostDetailComponent } from './modules/blog/components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },  // Redirect to home if no path is provided
    ],
  },
  // {
  //   path: 'projects',
  //   loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
  // },
  {
    path: ':slug',
    component: PostDetailComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
