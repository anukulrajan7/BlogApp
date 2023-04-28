import React, { useContext } from 'react'
import { AppContext } from '../../context/Appcontext'
import { ThreeDots } from 'react-loader-spinner'
import Card from './Card'
function Blog() {
  const {loading,posts}= useContext(AppContext)
  return (
     <div className='grid grid-cols-1 lg:grid-cols-2 py-6 md:w-[60%] lg:w-[80%] gap-8 w-[90%] justify-center  my-28  top-20 -z-10  mx-auto'>
       {
        loading?
        <div className='w-[100vw] h-[80vh] flex place-content-center'>
          <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />
        </div>:(
        posts.lenght===0?<h1>No Posts</h1>:
        (
          posts.map(post=>{return <Card posts={post}/>})
        )
        )
       }

     </div>
  )
}

export default Blog