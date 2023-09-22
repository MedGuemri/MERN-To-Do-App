const router=require('express').Router()
const taskcontrollers=require('../controllers/taskcontrollers')



router.get("/tasks",taskcontrollers.tasks)
router.get("/finishedTasks",taskcontrollers.finishedTasks)
router.get("/pendingTasks",taskcontrollers.pendingTasks)
router.post("/AddTask",taskcontrollers.AddTask)
router.post("/updateTask/:id",taskcontrollers.updateTask)
router.post("/isDoneTask/:id",taskcontrollers.isDoneTask)
router.delete("/deleteTask/:id",taskcontrollers.deleteTask)


module.exports=router