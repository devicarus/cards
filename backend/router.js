const fs = require('fs')

module.exports = (app) => {
    const routes = fs.readdirSync('./routes')

    routes.forEach(route => {
        const name = route.replace('.js', '')
        const module = require('./routes/' + route)

        const path = name == 'index' ? '/' : '/' + name

        app.use(path, module)
    });
}