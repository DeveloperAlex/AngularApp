import { HomeComponent } from './components/home/home.component';
// import { AppComponent } from './app.component';
// import { AboutComponent } from './../angular-examples/components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularExamplesModule } from './../angular-examples/angular-examples.module';

const routes: Routes = [
  {
    path: 'ng',
    loadChildren: './../angular-examples/angular-examples.module#AngularExamplesModule'
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// JUNKYARD /////////////////////////////////
// {
//   path: 'about',
//   loadChildren: 'app/angular-examples/angular-examples.module#AngularExamplesModule'
// },

// {
//   path: 'about',
//   loadChildren: 'angular-examples/angular-examples.module#AngularExamplesModule'
// },
