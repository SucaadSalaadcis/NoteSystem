//create server 
const express = require('express')
//import mongooose
const mongoose = require("mongoose")
// import schema design
const noteModel = require("./models/noteModel")

const app = express();
// it allows backend to connect frontend
const cors = require("cors");

app.use(express.json())
app.use(cors());
  //connect mongodb to node js copy link from mongodb campus
mongoose.connect("mongodb://0.0.0.0:27017/Notes").then(()=>{
    console.log("Database Has been Connected Successfuly")
}).catch((error) =>{
    console.log(error)  // err throw error 
})

// creating a new data 

app.post('/note/create' , async(req,res) =>{
 const newData = noteModel(req.body)
 const saveData = await newData.save()
 if(saveData){
    res.send(saveData)
 }
})
app.get('/allNotes' , async(req,res) =>{
 const Alldata = await noteModel.find()
 
 if(Alldata){
    res.send(Alldata)
 }
})

app.put('/notes/update/:id' , async(req,res) =>{
 const updateData = await noteModel.updateOne(
    {_id: req.params.id},
    {$set: req.body}
 )
 
 if(updateData){
    res.send(updateData)
 }
})

app.delete('/notes/delete/:id',async (req, res) => {
    const deleteData = await noteModel.deleteOne();
    {_id: req.params.id}
    if(deleteData){
        res.send("wala daledey")
     }
})




// listen port whether server is working or not
app.listen(5000 , () => console.log ('server is runnung on 5000'))