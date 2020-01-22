// @ts-ignore
import htm from 'htm';
// @ts-ignore
import vhtml from 'vhtml';

const html: (...args: any[]) => string = htm.bind(vhtml);

module.exports =
  '<!DOCTYPE html>' +
  html`
    <html>
      <head>
        <title>unkoman</title>
      </head>

      <body>
        <h1 id="hello">Hello world!</h1>
        <p>another line</p>
        <p>and some other line...</p>
      </body>
    </html>
  `;
