import Koa from 'koa';
// import {applyMiddleware} from './server.js';

const app = new Koa();


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(JSON.stringify(`Koa API server listening on 3000 in ${process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'}`));
    // callPollingFunction();
});
// applyMiddleware(app);
export default app;
