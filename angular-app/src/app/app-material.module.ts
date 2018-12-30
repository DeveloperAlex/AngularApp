import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: 
  [ MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule ],
  exports: 
  [ MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule ],
})
export class AppMaterialModule { }
