import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Note from './Note'
import axios from 'axios'

function Home() {
   // get api
  const [note, setNote]= useState([])
  const getAllNotes = () => {
    axios.get("http://localhost:5000/allNotes").then((response)=>{
       setNote(response.data);
        // console.log(response)
        // console.log(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  }

  // delete api
   const deleteNote =  (id)=> {
    axios.delete(`http://localhost:5000/notes/delete/${id}`).then(()=>{
      alert("Note Has Been Deleted..")
      getAllNotes()
    }).catch((error)=> console.log(error));
   }


    useEffect(()=>{
        document.body.style.backgroundColor = ""
        getAllNotes();
    },[])
  return (
    <div>
        <Header/>
        <div className='grid grid-cols-[300px_300px_300px_300px] gap-10 mt-20'>
          {
            note.map((data)=>{
             return <Note handleDelete={()=> deleteNote(data._id)} title={data.title} description={data.description}/> 

            })
          }
        </div>
    </div>
  )
}

export default Home