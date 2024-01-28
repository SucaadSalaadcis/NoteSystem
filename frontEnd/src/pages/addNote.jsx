import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function addNote(){
    const navigate = useNavigate();
    useEffect(()=>{
        document.body.style.backgroundColor = "grey"
    })

    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
   
    const handleRegisterNote = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/note/create",{
          "title": title,
          "description":description
        }).then((response)=>{
            alert("note has been registered sucssessfully")
            navigate("/")
        }).catch((error)=> console.log(error) )
    }


    return <div>
    <Header/>
     
     <div  class="shadow-xl shadow-gray bg-rose-400 w-[350px] h-[230px] absolute left-[450px] top-[110px] ml-20">
            <div class="p-10">
          
            <form>
                    <input value={title} className="" type="text" onChange={(event)=> setTitle(event.target.value)} placeholder="Enter title" />
                 <br /> 
                 <br />
                    <input value={description} className="" type="text" onChange={(event)=> setDescription(event.target.value)} placeholder="Enter description" /> 

                </form> 
                <div class="flex justify-between mt-10">
                    <button  class="bg-rose-200 rounded-md text-back px-3" onClick={handleRegisterNote}>Save</button>
                    <button  class="bg-rose-200 rounded-md text-back px-3">Close</button>
                </div>
            </div>
            </div>
            </div>
     

        
}


export default addNote