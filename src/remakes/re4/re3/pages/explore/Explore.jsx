import { useEffect, useState, useRef, useContext } from 'react'
import './Explore.scss'
import Innovation from '../../components/innovation/Innovation'
import Discover from '../../components/discover/Discover'
import Following from '../../components/following/Following'
import { ScrollContext } from '../../context/scrollContext'

const Explore = ()=>{

	const {pageName, setScrollPage } = useContext(ScrollContext)
	const firstScroll = useRef(null)
	const [initialScroll, setInitialScroll] = useState(null)

/*	useEffect(()=>{
	  firstScroll.current.scroll({
	    left: firstScroll.current.offsetWidth
	  })
	}, [initialScroll])*/

	useEffect(()=>{
   	  if(pageName === "Discover"){
	    firstScroll.current.scroll({
		left: firstScroll.current.offsetWidth,
		behavior: "smooth"
	    })
	  } else if(pageName === "Innovation"){
	    firstScroll.current.scroll({
		left: 0,
		behavior: "smooth"
	    })
	  } else if(pageName === "Following"){
	     firstScroll.current.scroll({
		left: firstScroll.current.offsetWidth * 2,
		behavior: "smooth"
	    })
	  }
	},[pageName])

	const handleScroll = (e)=>{
	  setScrollPage({
	    left: Math.ceil(e.target.scrollLeft),
	    width: Math.ceil(e.target.scrollWidth)
	  })
	}

 return(
  <div className="explore-page" ref={firstScroll} onScroll={(e)=>handleScroll(e)}>
	<div className="scroll-wrapper">
	 <Innovation/>
	 <Discover setInitialScroll={setInitialScroll}/>
	 <Following/>
	</div>
  </div>
 )
}

export default Explore
