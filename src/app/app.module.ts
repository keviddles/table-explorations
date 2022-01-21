import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import {
  NgMatTableComponent,
  TAG_NAME as NgMatTableComponentTagName,
} from './components/angular-table-wrapped-in-a-web-component';

@NgModule({
  imports: [BrowserModule, MatTableModule],
  entryComponents: [NgMatTableComponent],
  declarations: [AppComponent, NgMatTableComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // exports: [MatTableModule],
})
export class AppModule {
  constructor(injector: Injector) {
    if (!customElements.get(NgMatTableComponentTagName)) {
      customElements.define(
        NgMatTableComponentTagName,
        createCustomElement(NgMatTableComponent, { injector })
      );
    }
  }
}
