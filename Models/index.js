const { Sequelize } = require('sequelize');
// const connection = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

const sequelize = new Sequelize('nodejscrud', 'root', '', {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
  }).catch(err =>{
    console.error('Unable to connect to the database:', err.message);
  })
    
  const db={};

  db.sequelize=sequelize; //sequelize:sequelize 
  db.Sequelize=Sequelize;

  db.employee=require('./emp_model')(sequelize,Sequelize);
  db.dept=require('./dept_model')(sequelize,Sequelize);
  
module.exports =db;