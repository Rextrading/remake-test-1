import { useRef, useEffect } from 'react'
import Posts from '../posts/Posts'

const Discover =({setInitialScroll})=>{

	const done = useRef(null)

	useEffect(()=>{
		setInitialScroll(done)
	},[done])
   return (
	<div ref={done} className="scrollbar-item discover-page">
	   <Posts/>
	</div>
   )
}

export default Discover
