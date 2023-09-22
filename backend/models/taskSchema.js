const mongoose =require("mongoose")

const TaskSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    descreption: String,
    isDone:{
        type: Boolean,
        default:false
    }
},{timestamp: true})

const TaskModel=mongoose.model("task",TaskSchema)

module.exports=TaskModel