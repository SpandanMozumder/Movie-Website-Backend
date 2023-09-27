const mongoose = require("mongoose");
const dBConnection = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        if(connect){
            console.log("Connection Established!");
            console.log(connect.connection.host);
        }else{
            console.log("Connection err prolly network!");
        }
    }catch(err){
        console.log(err);
    }
}
module.exports = dBConnection;