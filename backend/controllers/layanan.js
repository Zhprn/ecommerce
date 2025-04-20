const db = require ('../models')
const Layanan = db.layanan;

exports.addLayanan = async(req, res) =>{
    try {
        const { nama_layanan, harga, deskripsi } = req.body;

        const layanan = await Layanan.create({
            nama_layanan,
            harga,
            deskripsi
        });
        res.status(201).json({layanan})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

exports.updateLayanan = async(req, res) => {
    let id = req.params.id
    try {
        const layanan = await Layanan.update(req.body, {where : {id:id}})
        res.status(201).json({message : "Update succesfully"})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

exports.deleteLayanan = async (req, res) => {
    let id = req.params.id
    try {
        await Layanan.destroy({where : {id:id}})
        res.status(201).json({message : "delete succesfully"})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

exports.getallLayanan = async (req, res) => {
    try {
        const layanan = await Layanan.findAll()
        res.status(201).json({layanan})
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}

exports.getoneLayanan = async (req,res) => {
    let = req.params.id
    try {
        const layanan = await Layanan.findOne({where : {id:id}})
        res.status(201).json({layanan})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}