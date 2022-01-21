import { Component } from '@angular/core';
import { data, cols } from './fake-data';
import './components/web-component-table-accepting-a-render-method';
import './components/web-component-table-accepting-rendering-via-slots';
import './components/wrapped-angular-table.component';
import './components/angular-inspired-web-component-table';
import { styles } from './components/web-component-table-built-as-html';

const colKeys = cols.map((col) => col.key);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [styles],
})
export class AppComponent {
  data = data.map((row) => colKeys.map((key) => row[key]));
  dataAsObjects = data;
  cols = cols.map((col) => col.name);
  colKeys = cols.map((col) => col.key);
}
