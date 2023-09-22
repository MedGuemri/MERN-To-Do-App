import React, { useState } from 'react'
import { MdDoneOutline } from 'react-icons/md';
import { BsFillTrashFill} from 'react-icons/bs';
import {  Card,
    CardBody,
    CardFooter,
    Typography,
    } from "@material-tailwind/react";
import ModalUpdateTask from './ModalUpdateTask';
import { useDispatch } from 'react-redux';
import { deleteTask, isDoneTask,reset } from '../redux/slices/taskSlice';

const TaskItem = ({task}) => {
  


  const dispatch = useDispatch()

  const handelDone=()=>{
    const updatedTask = { ...task, isDone: !task.isDone };
    dispatch(isDoneTask(updatedTask))  
    dispatch(reset())  
  }

  const handledelete = () => {
    dispatch(deleteTask(task))
    
  }


  return (
    <div>
       <Card className="mt-6  h-[200px] w-[600px] ">
      <CardBody>
        <div className='flex flex-row items-center justify-between'>
      <Typography variant="h5" color="blue-gray" className="mb-2">
         {task.title} 

        </Typography>
        {task.isDone &&<MdDoneOutline className="text-2xl text-light-green-500"/> } 
        </div>
       
        <Typography>
        {task.descreption}
        
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between">
          <button
            onClick={handelDone}
            className={task.isDone ? "text-3xl text-light-green-500" : 'text-3xl hover:text-light-green-500'}>
            <MdDoneOutline />
          </button>




        <ModalUpdateTask  task={task} />




        <button onClick={handledelete} className='text-3xl hover:text-red-500'><BsFillTrashFill/></button>
     
       
      </CardFooter>
    </Card>
    </div>
  )
}

export default TaskItem