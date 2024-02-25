const mongoose = require('mongoose')



mongoose.connect(process.env.DB_link, (req, res) => {
    
}).then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log('not connect',);
})