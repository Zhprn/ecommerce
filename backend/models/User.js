module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('user', {
        nama : {
            type : DataTypes.String,
            allowNull : false
        }, 
        email : {
            type : DataTypes.String,
            allowNull : false
        },
        password : {
            type : DataTypes.String,
            allowNull : false
        },
    })
}