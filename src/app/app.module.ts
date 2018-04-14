import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { PortsComponent } from './ports/ports.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    PortsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[NO_ERRORS_SCHEMA]
})
export class AppModule { }
