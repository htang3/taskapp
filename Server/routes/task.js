const express = require('express');

const router = express.Router();
const Task = require('../models/task')

router.get('/',(req,res,next)=>{
    Task.find()
    .then(task=> res.json(task))
    .catch(err => res.status(400).json("Error"+err))
})

router.post('/addtask', (req,res,next)=>{
    const {name, title, description, duration} = req.body;
    const newTask = new Task({name, title,description, duration});
    newTask.save()
        .then((task)=>{
            res.json("New task added")
        })
        .catch(err => res.status(400).json('Error' + err));
})
//get a specific task

router.get('/:id',(req,res,next)=>{
    Task.findById(req.params.id)
    .then(task=> res.json(task))
    .catch(err => res.status(400).json('Error' + err))
})

router.post('/update/:id',(req,res,next)=>{
    const {name, title, description, duration} = req.body;
    Task.findById(req.params.id)
    .then(task=> {
        task.name=name;
        task.title=title;
        task.description=description;
        task.duration=Number(req.body.duration);

        task.save()
        .then(()=> res.json("Update task"))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err => res.status(400).json('Error' + err))
})

router.delete('/:id',(req,res,next)=>{
    Task.findByIdAndDelete(req.params.id)
    .then(()=> res.json("Delete task"))
    .catch(err => res.status(400).json('Error' + err))
})
module.exports=router;