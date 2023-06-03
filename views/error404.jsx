const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                  <img src="/images/404-errors26.jpg" alt="Error 404 Image Blaming User"/>
                  <div>
                  Photo by <a href="https://time.com/3860627/404-error-page-fails-best-funniest/">Someecards</a> on <a href="https://time.com/3860627/404-error-page-fails-best-funniest/">TIME</a>
                  </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404