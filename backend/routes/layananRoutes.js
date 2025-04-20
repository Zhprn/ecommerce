const express = require("express")
const router = express.Router();
const LayananController = require('../controllers/layanan')

router.post("/addlayanan", LayananController.addLayanan)
router.put("/:id" , LayananController.updateLayanan)
router.delete("/:id", LayananController.deleteLayanan)
router.get("/getAllLayanan", LayananController.getallLayanan)
router.get("/:id", LayananController.getoneLayanan)

module.exports = router