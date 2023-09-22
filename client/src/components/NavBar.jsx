import React from 'react'
import { Link} from 'react-router-dom'

const NavBar = () => {
    const nav = [
        {
            id: 1,
            link: "All Tasks",
            path: "/"
        },

        {
            id: 2,
            link: "Done Tasks",
            path: "/DoneTasks"
        },

        {
            id: 3,
            link: "Pending Tasks",
            path: "/PendingTasks"
        }
    ]
  return (
    <div>
    {nav.map(({id,link,path})=>{

       return(

           <Link key={id}  to={path} ><button className="btnstyle"> {link}</button> </Link>
       )

    })}
   

</div>

)}

export default NavBar



