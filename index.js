const port = process.env.PORT || 8000;

const app = require('./app.js');
const connectDatabase = require("./config/database.js");


const server = app.listen(port,()=>{
    console.log('server is loaded on Port : ',port);
})