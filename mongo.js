const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://hanserguero:123456789erguero@cluster0.grg89xa.mongodb.net/hans")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("agents",newSchema)
module.exports=collection