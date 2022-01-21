import { define, html } from 'hybrids';

const getRenderCellDefault =
  (data: Array<Record<string, any>>) => (rowId: number, colId: number) =>
    html`${data[rowId][colId]}`;

export default define<{
  data: Array<Record<string, any>>;
  cols: Array<string>;
  renderCell: any;
}>({
  tag: 'web-component-table-accepting-a-render-method',
  data: undefined,
  cols: undefined,
  renderCell: undefined,
  render: ({ cols, data, renderCell }) => {
    if (renderCell === undefined) {
      // TODO: Move this to not be rendered on each render
      renderCell = getRenderCellDefault(data);
    }
    return html`
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
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      <table>
        <thead>
          <tr>
            ${cols?.map((col) => html`<th>${col}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${data?.map(
            (_, rowId) => html`
            <tr>
              ${cols?.map(
                (_, colId) => html`<td>${renderCell(rowId, colId)}</td>`
              )}
            </tr>
          `
          )}
        </tbody>

      </table>
    `;
  },
});
