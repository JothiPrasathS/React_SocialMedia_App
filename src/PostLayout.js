import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
    <Link to="/postpage/1">Post 1</Link>
    <br></br>
    <Link to="/postpage/2">Post 2</Link>
    <br></br>
    <Link to="/postpage/3">Post 3</Link>
    <br></br>
    <Link to="/postpage/newpost">NewPost</Link>
    <Outlet/>
    </>
  )
}

export default PostLayout
