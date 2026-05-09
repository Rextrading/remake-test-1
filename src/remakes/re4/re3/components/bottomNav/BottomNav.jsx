import './BottomNav.scss'
import { useState } from 'react'
import { CiSpeaker, CiSearch, CiChat1, CiSquarePlus} from 'react-icons/ci'
import SearchModal from '../searchModal/SearchModal'

const BottomNav = ({profileImg})=>{
	const [search, setSearch] = useState(null)
 return (
   <div className="bottom-nav">
	 <SearchModal search={search} setSearch={setSearch} />
	 <div className="tab-btns container">
	   <div className="tab active">
	     <CiSpeaker/>
	   </div>
	   <div className="tab" onClick={()=>setSearch("active")}>
	     <CiSearch/>
	   </div>
	   <div className="tab">
	     <CiSquarePlus/>
	   </div>
	   <div className="tab">
	     <CiChat1/>
	   </div>
	   <div className="tab profile">
	     <img src={profileImg}/>
	   </div>
	 </div>
   </div>
 )
}

export default BottomNav
