import { useState } from 'react'
import './style.scss'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import BottomNav from './components/bottomNav/BottomNav'
import Explore from './pages/explore/Explore'
import ProfileImg from './images/author-1.jpg'
import ScrollContextProvider from './context/scrollContext'

const Remake = ()=>{
	const [scrolled, setScrolled] = useState(null)
 const Layout = ()=>{
  return(
    <>
	<Sidebar/>
	<Navbar setScrolled={setScrolled} profileImg={ProfileImg}/>
	<Outlet/>
	<BottomNav profileImg={ProfileImg}/>
    </>
  )
 }

 const router = createBrowserRouter([
  { path: '/',
    element: <Layout/>,
    children: [
      {
	index: true, element: <Explore/>
      }
    ]
  }
])
 return (
	 <ScrollContextProvider>
	 	<RouterProvider router={router}/>
	 </ScrollContextProvider>
 )
}

export default Remake
