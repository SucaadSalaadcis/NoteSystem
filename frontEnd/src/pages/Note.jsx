import React from 'react'

function Note(props) {

  return (
   
   <div className='w-[280px] h-[200px] bg-rose-400 rounded p-2 ml-[190px] '>
    <h1 className='font-semibold mb-4'>{props.title}</h1>
    <p className=''>{props.description}</p>
   <button className='bg-white ml-[200px] mt-[80px] p-2 rounded-md' onClick={props.handleDelete}>delete</button>
    </div>
  )
}

export default Note