const React = require('react')

function Def (html) {
    return (
        <html>
           <head>
                <title>Title</title>
                <link rel='stylesheet' href='/css/styles.css'/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
            </head>
            <body>
                {html.children}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
            </body>
        </html>
    )
}

module.exports = Def