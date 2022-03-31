
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleSearch } from '../features/Search/SearchSlide'

const Search = () => {
    const dispatch = useDispatch()
    const searchRef=useRef()
    const onChange = (e)=>{
        dispatch(handleSearch(e.target.value))
    }
    const navigate = useNavigate()
    const onFocus = (e)=>{
        navigate('search')
    }
  return (
    <div className='search'>
        <input type="text" name='search' placeholder='Search'
        ref={searchRef}
        onChange={onChange}
        onFocus={onFocus}
        />
    </div>
  )
}

export default Search