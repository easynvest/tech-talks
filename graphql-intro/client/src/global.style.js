import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    background: #F4F4F4;
    color: #333;
    font: 16px Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
