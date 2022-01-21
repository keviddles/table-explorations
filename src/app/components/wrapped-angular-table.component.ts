import {
  Component,
  Input,
} from '@angular/core';

export const TAG_NAME = 'wrapped-angular-table';

@Component({
  template: `
    <table mat-table [dataSource]="data">
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>Name</th>
        <td mat-cell *matCellDef="let row">{{row[0]}}</td>
      </ng-container>
      <ng-container matColumnDef="totalRuns">
        <th mat-header-cell *matHeaderCellDef>Total Runs</th>
        <td mat-cell *matCellDef="let row">{{row[1]}}</td>
      </ng-container>
      <ng-container matColumnDef="system">
        <th mat-header-cell *matHeaderCellDef>System</th>
        <td mat-cell *matCellDef="let row">{{row[2]}}</td>
      </ng-container>
      <ng-container matColumnDef="details">
        <th mat-header-cell *matHeaderCellDef>Details</th>
        <td mat-cell *matCellDef="let row; let rowId = index">{{rowId}}</td>
      </ng-container>

    <tr mat-header-row *matHeaderRowDef="cols"></tr>
    <tr mat-row *matRowDef="let row; columns: cols;"></tr>
  </table>
  `,
  styles: [`
    table {
      border-collapse: collapse;
      background: inherit;
    }
    table th, table td {
      text-align: left;
      padding: 10px;
    }
    table th {
      background-color: black;
      border: 1px solid yellow;
      text-transform: uppercase;
      color: green;
    }
    table td {
      border: 1px solid red;
      background: inherit;
      color: inherit;
    }
    a {
      color: lightblue;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `],
})
export class NgMatTableComponent {
  @Input() data: Record<string, any>[];
  @Input() cols: string[];
}
