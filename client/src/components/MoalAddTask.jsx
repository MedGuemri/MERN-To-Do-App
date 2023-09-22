import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
  } from "@material-tailwind/react";
import { useDispatch} from 'react-redux';
import {AddTask}from "../redux/slices/taskSlice"

const MoalAddTask = () => {

 
  const dispatch=useDispatch()
    const [open, setOpen] = React.useState(false);

    const [newTask,setNewTask]=useState({})
    
 
    const handleOpen =  () => setOpen(!open);

    const handleOAdd=()=>{
        dispatch(AddTask(newTask))
        handleOpen()
       
     
    }
  return (
    <>
    <Button className='mt-4' color='light-green' size='lg' onClick={handleOpen}>Add new task</Button>
    <Dialog  open={open} handler={handleOpen}>
      <div className="flex items-center justify-between">
        <DialogHeader >Add Title Task </DialogHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
         
          onClick={handleOpen}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <DialogBody divider>
        <div className="grid gap-6">
          <Input label="title" onChange={(e)=>setNewTask({...newTask,title:e.target.value})} />
          <Textarea label="Descreption" onChange={(e)=>setNewTask({...newTask,descreption:e.target.value})} />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="outlined" color="blue-gray" onClick={handleOpen}>
          close
        </Button>
        <Button variant="gradient" color="light-blue" onClick={handleOAdd}>
         Submit
        </Button>
      </DialogFooter>
    </Dialog>
  </>
  )
}

export default MoalAddTask