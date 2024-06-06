import {ApplicationRef, DoBootstrap, Injector, NgModule, ViewChild} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator-widget/calculator-widget.component';
import {createCustomElement} from "@angular/elements";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const calculatorWidget = createCustomElement(CalculatorComponent, {injector: this.injector});
    customElements.define('calculator-widget', calculatorWidget);

    appRef.bootstrap(AppComponent);
  } }
