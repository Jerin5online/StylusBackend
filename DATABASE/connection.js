const mongoose = require('mongoose')

const connection_string = process.env.connection_string

mongoose.connect(connection_string).then((res)=>{
console.log('MONGODB CONNECTED');
}).catch((err)=>{
console.log(`mongoDB connection failed due to :${err}`);
})