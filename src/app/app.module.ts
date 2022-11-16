import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroProjetoComponent } from './primeiro-projeto/primeiro-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroProjetoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
