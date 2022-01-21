import { define, html, store } from 'hybrids';
// import Handlebars from 'handlebars';

const TAG_NAME = 'angular-inspired-web-component-table';

// const push = (key, val) => {
//   store.set(GlobalState, {
//     [key]: [...store.get(GlobalState)[key], val],
//   });
// };

// const handleSlotChange = (data) => (e) => {
//   const childNodes = e.target.assignedNodes({ flatten: true });
//   let slotsFound = false;
//   childNodes.forEach((node) => {
//     const columnDef = node.getAttribute('columndef');
//     if (columnDef) {
//       const th = node.querySelector('th');
//       push('headerCells', th);

//       slotsFound = true;

//       const td = node.querySelector('td');
//       const template = Handlebars.compile(td.innerHTML);
//       const cellDef = td.getAttribute('cellDef');
//       const expressions = cellDef
//         .split(';')
//         .filter(Boolean)
//         .map((e) => e.split('='));
//       const parseExpression = (expression, args) => {
//         const key = expression[0].split('let').pop().trim();
//         if (expression.length === 1) {
//           return {
//             [key]: data[args.index],
//           };
//         }

//         const val = expression[1].trim();
//         return {
//           [key]: args[val],
//         };
//       };
//       // this._cellRenderers.push((index) => {
//       //   const parsedExpressions = expressions.reduce(
//       //     (obj, e) => ({ ...obj, ...parseExpression(e, { index }) }),
//       //     {}
//       //   );
//       //   return html`<td>${unsafeHTML(template(parsedExpressions))}</td>`;
//       // });
//     }
//   });

//   // if (slotsFound) {
//   //   this.shadowRoot.querySelectorAll('slot').forEach(slot => {
//   //     this.shadowRoot.removeChild(slot as any);
//   //   });
//   //   this.requestUpdate();
//   // }
// };

// export default define({
//   tag: TAG_NAME,
//   data: [],
//   cols: [],
//   headerCells: () => Store.get(GlobalState).headerCells,
//   handleSlotChange,
//   render: ({ headerCells, cols, data, handleSlotChange }) => {
//     console.log(headerCells);
//     // const { headerCells, cellRenderers } = store.get(GlobalState);
//     return html`
//       FOOEY
//     `;
//   },
// });

const GlobalState = {
  count: 0,
};

function incCount(host) {
  store.set(GlobalState, { count: host.count + 1 });
}

define({
  tag: TAG_NAME,
  count: () => store.get(GlobalState).count,
  render: ({ count }) => html`
    <button onclick=${incCount}>${count}</button>
  `,
});
