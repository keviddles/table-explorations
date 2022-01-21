import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

type CellRenderer = (rowId: number) => TemplateResult;

const Handlebars = window['Handlebars'];

@customElement('web-component-table-inspired-by-angular')
class TableAngularMimic extends LitElement {
  @property({ type: Array })
  data: Array<Record<string, any>>;

  @property({ type: Array })
  cols: Array<string>;

  @state()
  private _headerCells = [];

  @state()
  private _cellRenderers: Array<CellRenderer> = [];

  static styles = css`
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
  `;

  handleSlotChange(e) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    let slotsFound = false;
    childNodes.forEach((node) => {
      const columnDef = node.getAttribute('columndef');
      if (columnDef) {
        const th = node.querySelector('th');
        this._headerCells.push(th);

        slotsFound = true;

        const td = node.querySelector('td');
        const template = Handlebars.compile(td.innerHTML);
        const cellDef = td.getAttribute('cellDef');
        const expressions = cellDef
          .split(';')
          .filter(Boolean)
          .map((e) => e.split('='));
        const parseExpression = (expression, args) => {
          const key = expression[0].split('let').pop().trim();
          if (expression.length === 1) {
            return {
              [key]: this.data[args.index],
            };
          }

          const val = expression[1].trim();
          return {
            [key]: args[val],
          };
        };
        this._cellRenderers.push((index) => {
          const parsedExpressions = expressions.reduce(
            (obj, e) => ({ ...obj, ...parseExpression(e, { index }) }),
            {}
          );
          return html`<td>${unsafeHTML(template(parsedExpressions))}</td>`;
        });
      }
    });

    if (slotsFound) {
      this.shadowRoot.querySelectorAll('slot').forEach((slot) => {
        this.shadowRoot.removeChild(slot as any);
      });
      this.requestUpdate();
    }
  }

  render() {
    const { cols, data } = this;
    return html`
      <slot @slotchange=${this.handleSlotChange}>DEFAULT</slot>
      <table>
        <thead>
          <tr>
            ${this._headerCells}
          </tr>
        </thead>
        <tbody>
          ${data?.map(
            (_, rowId) => html`
            <tr>
              ${this._cellRenderers.map((cellRenderer) => cellRenderer(rowId))}
            </tr>
          `
          )}
        </tbody>

      </table>
    `;
  }
}
