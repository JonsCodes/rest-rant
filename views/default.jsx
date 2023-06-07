const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        />
      </head>
      <body>
      <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav>
        {html.children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}

module.exports = Def;
