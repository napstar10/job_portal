import Sequelize from 'sequelize'
import config from './config.js';

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


// // Tables
// db.User = require('../model/user')(db);
// db.Contest = require('../model/contest')(db);
// db.Participant = require('../model/participant')(db);
// db.Problem = require('../model/problem')(db);


// // ************************************ Table Associations *********************************


// // Problem-SampleTestCase
// db.Problem.hasMany(db.SampleTestCase, {onDelete: 'cascade' });
// db.SampleTestCase.belongsTo(db.Problem);


// // Problem-TestCase
// db.Problem.hasMany(db.TestCase, {onDelete: 'cascade' });
// db.TestCase.belongsTo(db.Problem);




// // *******  Table creation (Warning :: if 'force:true' is passed, tables will be droped and recreated again )
// // fun(db)

// db.pageSize = 100;


export default db;

async function fun(db){
  // await db.Problem.sync({alter:true})
  // await db.ProblemBoilerplate.sync({alter:true})
  // await db.SampleTestCase.sync({alter:true})
  // await db.TestCase.sync({alter:true})
  // await db.User.sync({alter:true})
  // await db.Comment.sync({alter:true})
  // await db.Contest.sync({alter:true})
  // await db.Participant.sync({alter:true})
  // await db.Submission.sync({alter:true})
  // await db.Editorial.sync({alter:true})
  // await db.EditorialSolution.sync({alter:true})
}

// try {
//   fun(db).then(res => {
//   }).catch(e => {
//     console.log(e.stack)
//   });
// } catch(e) {
//   console.error(e.stack);
// }

