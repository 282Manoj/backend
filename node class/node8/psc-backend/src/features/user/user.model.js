const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        requird:true,
        unique:true,
    },
    password:{
        type:String,
        requird:true,
    },
    name:{
        type:String,
        requird:true,
    },
    age:{
        type:Number,
    }

},
{
    versionKey:false,
    timestamps:true,
}
);
const User = mongoose.model("user",userSchema);
module.exports = User;