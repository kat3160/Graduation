const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/public/test.json', {
            target: 'http://localhost:3002/'
        })
    );
}