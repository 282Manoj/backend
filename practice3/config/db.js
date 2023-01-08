const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://manoj:aarush@cluster0.7lrxmwq.mongodb.net/practice?retryWrites=true&w=majority");

const practiceSchema=mongoose.Schema({
    Title:{type:String,required:true},
    Note:{type:String,required:true},
    Tags:{type:String,required:true}
})
const PracticeModel=mongoose.model("NoteData",practiceSchema);


module.exports={
connection,
PracticeModel
}