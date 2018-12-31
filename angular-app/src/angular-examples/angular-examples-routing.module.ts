import { FirestoreComponent } from './components/firestore/firestore.component';
import { AboutComponent } from './../angular-examples/components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', children: [
    { path: 'about', component: AboutComponent },
    { path: 'firestore', component: FirestoreComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularExamplesRoutingModule { }
