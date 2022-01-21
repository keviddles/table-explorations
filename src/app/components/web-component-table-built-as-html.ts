import { define, html } from 'hybrids';

define({
  tag: 'web-component-table-built-as-html',
  render: () => html`
    <style>#table { display: table; }</style>
    <div id="table">
      <slot name="thead">default thead</slot>
      <slot name="tbody">default tbody</slot>
    </div>
    `,
});

define({
  tag: 'web-component-table-built-as-html-thead',
  render: () => html`
    <style>.tr { display: table-row; }</style>
    <div class="tr"><slot></slot></div>
  `,
});

define({
  // this component purely to mirror the above thead component
  tag: 'web-component-table-built-as-html-tbody',
  render: () => html`<slot></slot>`,
});

export const styles = `
  th, td {
    padding: 10px;
  }
  td {
    border: 1px solid red;
  }
  th {
    background-color: black;
    border: 1px solid yellow;
    text-transform: uppercase;
    color: green;
  }
  a {
    color: lightblue;
  }
  a:hover {
    text-decoration: underline;
  }
  web-component-table-built-as-html-thead {
    display: table-header-group;
  }
  web-component-table-built-as-html-tbody {
    display: table-row-group;
  }
`;
