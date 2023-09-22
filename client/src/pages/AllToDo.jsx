
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  getTasks, reset } from "../redux/slices/taskSlice";
import TaskItem from "../components/TaskItem"

const AllToDo = () => {

  const allTasks=useSelector((state)=>state.task.tasksList)
  const update=useSelector((state)=>state.task.updated)
  const dispatch= useDispatch()




      useEffect(()=>{
    dispatch(getTasks())
    dispatch(reset())
    
  },[dispatch,update]
  )

  return (
    <div className="w-[70%] flex flex-col items-center">
    {
      allTasks &&allTasks.map((task)=> <TaskItem  key={task._id} task={task} />)
    }
  </div>
  )
}

export default AllToDo