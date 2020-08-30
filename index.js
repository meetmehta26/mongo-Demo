const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost')
.then(()=>console.log('connected to the mongo db'))
.catch(()=>console.log("Error connecting to the db"));