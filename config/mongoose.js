// require  mongoose
const mongoose = require('mongoose');
// connecting with database
mongoose.connect('mongodb://localhost:27017/freindsHub_dev');
// check the connection(to check if it sucessfull)
const db = mongoose.connection;
//error
db.on('error' , console.error.bind(console, 'error connecting to db'));
// up and running and print the message
db.once('open', function(){
    console.log('successfully fire the server db');
})

