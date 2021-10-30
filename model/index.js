import Sequelize from 'sequelize'
import config from './config.js';
import User from './user.js';
import Job from './job.js';

const conf = config[process.env['NODE_ENV'] ? process.env['NODE_ENV'] : 'development'];

console.log(JSON.stringify(conf));
// DB instance
const db = new Sequelize(conf.pgConfig.database, conf.pgConfig.username, conf.pgConfig.password, {
  host: conf.pgConfig.host,
  port : conf.pgConfig.port,
  dialect: conf.pgConfig.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 5000
  }
});


try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


// Tables
db.User = User.init(db);
db.Job = Job.init(db);


// // ************************************ Table Associations *********************************


// Problem-SampleTestCase
db.User.hasMany(db.Job, {onDelete: 'cascade' });
db.Job.belongsTo(db.User);


db.pageSize = 100;


export default db;

async function fun(db){
  await db.User.sync({alter:true})
  await db.Job.sync({alter:true})
}

  // try {
  //   fun(db).then(res => {
  //   }).catch(e => {
  //     console.log(e.stack)
  //   });
  // } catch(e) {
  //   console.error(e.stack);
  // }

