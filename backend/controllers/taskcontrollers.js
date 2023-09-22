const TaskModel=require("../models/taskSchema")


const taskcontrollers={


    tasks:async(req,res)=>{
        try {
            const allTasks= await TaskModel.find()
            res.status(200).json(allTasks)
        } catch (error) {
            res.status(400).json({message:error})
            
        }
    },


    finishedTasks:async(req,res)=>{
        try {
            const FinishedTasks= await TaskModel.find({isDone:true})
            res.status(200).json(FinishedTasks)
        } catch (error) {
            res.status(400).json(error)
            
        }
    },



    pendingTasks:async(req,res)=>{
        try {
            const pendingTasks= await TaskModel.find({isDone:false})
            res.status(200).json(pendingTasks)
        } catch (error) {
            res.status(400).json(error)
            
        }

    },



    AddTask:async(req,res)=>{

        const {title,descreption,isDone}= req.body

        try {
            const newTask = await TaskModel.create({title: title,descreption:descreption , isDone:isDone})
            if(newTask){
                return res.status(200).json(newTask)
            }
            
        } catch (error) {
            res.status(400).json( error)
            
        }
    },




    updateTask:async(req,res)=>{
        const taskId = req.params.id;
       
        try {
            const updatedTask = await TaskModel.findByIdAndUpdate(
                taskId, req.body
                ,{ new: true });
                if (updatedTask) {
                    return res.status(200).json(updatedTask );
                } else {
                    return res.status(404).json({ message: "Task not found" });
                }
        } catch (error) {
            res.status(400).json( error );
        }
    },


    isDoneTask:async(req,res)=>{
        const taskId = req.params.id;
       
        try {
            const isDone = await TaskModel.findByIdAndUpdate(
                taskId, req.body
                ,{ new: true });
                if (isDone) {
                    return res.status(200).json(isDone );
                }
               
        } catch (error) {
            res.status(400).json( error );
        }
    },








    deleteTask:async(req,res)=>{
        const taskId = req.params.id
        try {
            const deltedTask = await TaskModel.findByIdAndDelete(taskId)
            if(!deltedTask){
                return res.status(400).json({message:"task not found"})

            }
            res.status(200).json( deltedTask)
        } catch (error) {
            res.status(500).json(error)
            
        }

    },
}


module.exports=taskcontrollers