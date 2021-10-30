import Koa from 'koa';
import Router from 'koa-router';
import compress from 'koa-compress';
import koaBody from 'koa-body';

import {test} from './controller/test.js'
import {create, verify, login} from './controller/user.js'
import {add, view} from './controller/jobListing.js'

const app = new Koa();
const router = new Router();

router.get('/test', test);

//user routes
router.post('/user/signup', create);
router.post('/user/verify', verify);
router.post('/user/login', login);


//user routes
router.post('/job/add', add);
router.get('/job/view/:id', view);



app.use(koaBody({
        multipart  : true,
        urlencoded : true,
        jsonLimit  : 50000000,
    }));

app.use(router.routes());	

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(JSON.stringify(`Koa API server listening on 3000 in ${process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'}`));
});


export default app;
