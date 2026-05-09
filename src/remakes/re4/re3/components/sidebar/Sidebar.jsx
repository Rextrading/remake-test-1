import './Sidebar.scss'
import {useContext} from 'react'
import {ScrollContext} from '../../context/scrollContext'

const Sidebar =()=>{

   const {sidebar, setSidebar} = useContext(ScrollContext)
   return(
	<div className={`sidebar ${sidebar === "active" ? "active" : ""}`}>
	   <div className="overlay" onClick={()=>setSidebar("")}></div>
	   <div className="sidebar-content">
	   	content
	   </div>
	</div>
   )
}

export default Sidebar
