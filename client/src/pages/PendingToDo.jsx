
import { useDispatch, useSelector } from 'react-redux'
import {  pendingTasks, reset } from "../redux/slices/taskSlice";
import TaskItem from "../components/TaskItem"
import { useEffect } from 'react';

const PendingToDo = () => {
  const allTasks=useSelector((state)=>state.task.tasksList)
  const update=useSelector((state)=>state.task.updated)
  const dispatch= useDispatch()

   useEffect(()=>{
    dispatch(pendingTasks())
  },[dispatch,update]
  )


  return (
    <div className="w-[70%] flex flex-col items-center">
    {
  allTasks &&allTasks.filter(task=>task.isDone==false).map((task)=> <TaskItem  key={task._id} task={task} />)
    }
  </div>
  )
}

export default PendingToDo