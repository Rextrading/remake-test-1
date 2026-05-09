import './SearchModal.scss'
import { useRef, useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { TfiArrowLeft } from 'react-icons/tfi'

const SearchModal = ({search, setSearch })=>{

	const [results, setResults] = useState(null)

	const [inputValue, setInputValue] = useState("")

	const cancelSearch = ()=>{
		setInputValue("")
		setSearch("")
	}

	const inputRef = useRef(null)

	useEffect(()=>{
		inputRef.current.focus()
	})

  return (
    <div className={`search-modal ${search === "active" ? "active" : ""}`}>
	<div className={`overlay ${!results ? "" : "hidden"}`} onClick={cancelSearch}></div>
     <div className="top-bar">
	  <button className="close-btn icon" onClick={cancelSearch}>
	    <TfiArrowLeft/>
	  </button>
	  <div className="search-bar">
	    <span className="icon">
	      <CiSearch/>
	    </span>
	    <input type="search" placeholder="Search..." ref={inputRef} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} spellcheck="false"/>
	  </div>
     </div>
     <div className={`search-results ${!results ? "" : "active"}`}>
	  <p>results</p>
     </div>
    </div>
  )
}

export default SearchModal
