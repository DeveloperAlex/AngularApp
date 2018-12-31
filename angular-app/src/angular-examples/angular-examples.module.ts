import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AngularExamplesRoutingModule } from './angular-examples-routing.module';
import { FirestoreComponent } from './components/firestore/firestore.component';

@NgModule({
  declarations: 
  [ AboutComponent, FirestoreComponent ],
  imports: [
    CommonModule,
    AngularExamplesRoutingModule
  ],
  exports: [ 
    AngularExamplesRoutingModule,
    AboutComponent 
  ],
})
export class AngularExamplesModule { }
