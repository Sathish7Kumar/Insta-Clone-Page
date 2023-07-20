import React from 'react'
import Post from './Post'
import Story from './Story'
import UserAction from './UserAction'

function Body() {
  return (
    <div className='bodySection'>
    <div className='left-side-part'>
        <Story/>
        <Post/>
    </div>
    <div className='right-side-part'>
      <UserAction/>
    </div>
    </div>
  )
}

export default Body