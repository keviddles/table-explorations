import { Component } from '@angular/core';
import { data, cols } from './fake-data';
import { html } from 'hybrids';

import './components/web-component-table-accepting-a-render-method';
import './components/web-component-table-accepting-rendering-via-slots';
import './components/angular-table-wrapped-in-a-web-component';
// import './components/web-component-table-inspired-by-angular';
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
  renderCell(rowId: number, colId: number) {
    if (colId === 3) {
      return html`<a href="detail/${rowId}">Link for ${rowId}</a>`;
    }
    return data[rowId][cols[colId].key];
  }
}
