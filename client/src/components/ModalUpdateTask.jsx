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
import { BsPencilSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { reset, updatedTask } from '../redux/slices/taskSlice';

const ModalUpdateTask = ({ task }) => {

  const dispatch = useDispatch()

  const [updateTask, setUpdateTask] = useState(task)

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);




  const handleupdate = () => {
    dispatch(updatedTask(updateTask))
    dispatch(reset()) 
    handleOpen()
  }



  return (
    <>
      <button onClick={handleOpen} className=' text-3xl hover:text-light-blue-500'><BsPencilSquare /></button>
      <Dialog open={open} handler={handleOpen}>
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
            <Input label="title" value={updateTask.title} onChange={(e) => setUpdateTask({ ...updateTask, title: e.target.value })} />
            <Textarea label="Descreption" value={updateTask.descreption} onChange={(e) => setUpdateTask({ ...updateTask, descreption: e.target.value })} />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" color="light-blue" onClick={handleupdate}>
            Submit
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default ModalUpdateTask