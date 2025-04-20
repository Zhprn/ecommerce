const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser')

//routes
const layananRoutes = require('./routes/layananRoutes');

//midlewares
const app = express()
app.use(bodyParser.json())
app.use(cors())

// routes
app.use('/api/layanan', layananRoutes);


// port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})