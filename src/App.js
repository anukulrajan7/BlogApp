import React, { useEffect,useContext } from 'react'
import Blog from './components/pages/Blog'
import Pagination from './components/layout/Pagination'
import Header from './components/layout/Header'
import {AppContext} from './context/Appcontext'
import "./App.css"
function App() {
  const {fetchBlogPosts} = useContext(AppContext)
 useEffect(() => {
   fetchBlogPosts();
 }, []);
  return (
    <div className='  flex justify-center'>
      <Header/>
      <Blog />
      <Pagination/>
    </div>
  )
}

export default App