const mongoose = require("mongoose");
 
async function connect(){
   try{
       await mongoose.connect("Add Ypur Connecting String here");
      
   }catch(err){
       console.log("Error happens in MongoDB: "+err);
   }
}
 module.exports= { connect };