import { define, html } from 'hybrids';

export default define<{
  data: Array<Record<string, any>>;
  cols: Array<string>;
}>({
  tag: 'web-component-table-accepting-rendering-via-slots',
  data: undefined,
  cols: undefined,
  render: ({ cols, data }) => html`
    <style>
      table {
        border-collapse: collapse;
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
      }
      a {
        color: lightblue;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
    <table>
      <thead>
        <tr>
          ${cols?.map(
            (col) => html`
            <th>${col}</th>
          `
          )}
        </tr>
      </thead>
      <tbody>
        ${data?.map(
          (row, rowId) => html`
          <tr>
            ${cols?.map(
              (_, colId) => html`
              <td>
                <slot name="data-${rowId}-${colId}">${row[colId]}</slot>
            </td>
            `
            )}
          </tr>
        `
        )}
      </tbody>
    </table>
  `,
});
