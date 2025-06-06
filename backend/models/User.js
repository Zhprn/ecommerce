module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('user', {
        nama : {
            type : DataTypes.STRING,
            allowNull : false
        }, 
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
    })

    return User
}