import MoalAddTask from "./components/moalAddTask";
import NavBar from "./components/NavBar";
import AllToDo from "./pages/AllToDo";
import PendingToDo from "./pages/PendingToDo";
import FinishedToDo from "./pages/FinishedToDo";
import { Route, Routes } from "react-router-dom";




function App() {
 
  return (
    <>
      <div className="flex items-center flex-col   min-h-screen ">
        <h1 className='text-6xl font-bold text-teal-400 my-10 '>To Do </h1>
        <div className="w-[70%] flex flex-col items-center">

        <NavBar />
        <MoalAddTask  />

          <Routes>
            <Route path='/' element={<AllToDo />} />
            <Route path='/PendingTasks' element={<PendingToDo />} />
            <Route path='/DoneTasks' element={<FinishedToDo />} />
          </Routes>

   
        </div>
      </div>
       
    </>
  )
}

export default App
