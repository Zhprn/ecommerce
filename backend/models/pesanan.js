module.exports = (Sequelize, DataTypes) => {
    const pesanan = Sequelize.define('pesanan', {
        users_id : {
            type : DataTypes.STRING,
            allowNull : true
        },
        layanans_id : {
            type : DataTypes.STRING,
            allowNull : true
        },
        status : {
            type : DataTypes.STRING,
            allowNull : true
        }
    })

    return pesanan;
}