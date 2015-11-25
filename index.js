var koa = require('koa');
var app = koa();
var router = require('koa-router');
var mount = require('koa-mount');
 
var handler = function *(next){
    this.type = 'json';
    this.status = 200;
    this.body = {'Minnow Seeking Truth'};
};
 
var APIv1 = new router();
APIv1.get('/all', handler);
 
app.use(mount('/v1', APIv1.middleware()));
if (!module.parent) app.listen(3000);
console.log('server running at http://localhost:3000/');