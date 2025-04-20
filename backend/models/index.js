const dbconfig = require('../config/db.js');
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
        host : dbconfig.HOST,
        dialect : dbconfig.dialect,
        logging  : false,
        pool : {
            max : dbconfig.pool.max,
            min : dbconfig.pool.min,
            acquier : dbconfig.pool.acquire,
            idle : dbconfig.pool.idle,
        }
    }
);

sequelize.authenticate() 
    .then(() => {
        console.log("Database Running");
    })
    .catch(err => {
        console.log("Database Error" +err.message)
    })

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user  = require('../models/User.js')(sequelize, DataTypes);
db.layanan = require('../models/layanan.js')(sequelize, DataTypes)

db.sequelize.sync({force : false})
    .then(() => {
        console.log("Sync database succesfully")
    })

module.exports =  db;