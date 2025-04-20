module.exports = (Sequelize, DataTypes) => {
    const layanan = Sequelize.define('layanan' ,{
        nama_layanan : {
            type : DataTypes.STRING, 
            allowNull : false
        },
        harga  : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        deskripsi  : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })

    return layanan
}