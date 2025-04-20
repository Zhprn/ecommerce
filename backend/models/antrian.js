module.exports = (Sequelize, DataTypes) => {
    const antrian = Sequelize.define('antrian', {
        pesanans_id : {
            type : DataTypes.STRING,
            allowNull : true
        },
        nomor : {
            type : DataTypes.STRING,
            allowNull : false
        },
        status : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })

    return antrian;
}