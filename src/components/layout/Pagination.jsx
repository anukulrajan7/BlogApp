import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../../context/Appcontext'
function Pagination() {
  const {  totalPages,page,handlePageChange} = useContext(AppContext)
  return (
    <div className='w-full  bg-white bottom-0 z-30  m-auto  fixed flex justify-evenly shadow-2xl py-4 shadow-slate-700'>
        {
          page!==1?<button 
          className='text-xl  px-4 py-2 text-white bg-purple-800 shadow-md shadow-fuchsia-400
          hover:bg-purple-700 hover:shadow-lg rounded-md'
          onClick={()=>{handlePageChange(page-1)}}
     >
  Previous </button>:""
        }
        {
          page!==totalPages ?
          <button button 
          className='text-xl  px-4 py-2 text-white bg-purple-800 shadow-md shadow-fuchsia-400
          hover:bg-purple-700 hover:shadow-lg rounded-md'
          onClick={()=>handlePageChange(page+1)}>
            Next
          </button>:""
        }
      </div>
  )
}

export default Pagination