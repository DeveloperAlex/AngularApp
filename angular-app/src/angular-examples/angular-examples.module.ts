import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AngularExamplesRoutingModule } from './angular-examples-routing.module';

@NgModule({
  declarations: 
  [ AboutComponent ],
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
