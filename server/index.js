const Koa = require('koa')
const fs = require('fs')
const main = require('./build/main')
const index = fs.readFileSync('../web/public/index.html').toString()

const app = new Koa();

app.use(async ctx => {
    
    ctx.body = index.replace('<div id="root"></div>',`<div id="root">${main.render()}</div>`)
})
app.listen(7001, () => {
    console.log('server start at localhost 7001')
})


