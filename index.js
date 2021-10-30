import Koa from 'koa';
import Router from 'koa-router';
import {test} from './controller/test.js'

const app = new Koa();
const router = new Router();

router.get('/test', test);






app.use(router.routes());	

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(JSON.stringify(`Koa API server listening on 3000 in ${process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'}`));
});


export default app;
