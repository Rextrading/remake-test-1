import './Navbar.scss'
import { useState, useEffect, useRef, useContext } from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import { BsFilterLeft } from 'react-icons/bs'
import { ScrollContext } from '../../context/scrollContext'

const Navbar = ({profileImg})=>{

	const {setPageName, scrollPage, setSidebar } = useContext(ScrollContext)

	const initActTab = useRef(null)
	const tabLine = useRef(null)
	const [ofLeft, setOfLeft] = useState(0)

	useEffect(()=>{
	   initActTab.current.click()
	   tabLine.current.style.left = initActTab.current.offsetLeft + "px"
	   tabLine.current.style.width = initActTab.current.offsetWidth + "px"

		setOfLeft(initActTab.current.offsetLeft)

	}, [initActTab])

  const [activeTab, setActiveTab] = useState("Discover")
  const handleTabs = (event, tabName)=>{
    	setActiveTab(tabName)
	setPageName(tabName)

	tabLine.current.style.left = event.target.offsetLeft + "px"
	tabLine.current.style.width = event.target.offsetWidth + "px"
  }
	/*useEffect(()=>{
	tabLine.current.style.left = scrollPage.left + "px"
        tabLine.current.style.width = scrollPage.width + "px"
	},[scrollPage])*/

 return(
  <div className="navbar">
    <div className="nav-top-container container">
	<div className="menu-btn btn" onClick={()=>setSidebar("active")}>
	  <BsFilterLeft/>
	</div>
	
	<h3 className="page-title">Explore</h3>

	<div className="notification-btn btn">
	  <AiOutlineBell/>
	</div>
    </div>
    <div className="nav-tabs">
	<div className={`tab ${activeTab === "Innovation"?"active":""}`} onClick={(event)=>handleTabs(event,"Innovation")}>Innovation</div>
	<div ref={initActTab} className={`tab discover ${activeTab === "Discover"?"active":""}`} onClick={(event)=>handleTabs(event,"Discover")}>Discover</div>
	<div className={`tab ${activeTab === "Following"?"active":""}`} onClick={(event)=>handleTabs(event,"Following")}>Following<img src={profileImg}/></div>

	 <div ref={tabLine} className="tab-line" id="tab-line"></div>
    </div>

  </div>
 )
}

export default Navbar
