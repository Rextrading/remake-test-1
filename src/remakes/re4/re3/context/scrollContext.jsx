import { createContext, useState } from 'react'

export const ScrollContext = createContext(null)

const ScrollContextProvider = (props)=>{

	const [sidebar,setSidebar] = useState("")

  const [pageName, setPageName] = useState("Discover")

   const [scrollPage, setScrollPage] = useState({
	left: 0,
	width: 0
   })

   const contextValue = {
	setScrollPage,
	scrollPage,
	pageName,
	setPageName,
	sidebar,
	setSidebar
   }

   return(
	<ScrollContext.Provider value={contextValue}>
	   {props.children}
	</ScrollContext.Provider>
   )
}

export default ScrollContextProvider
