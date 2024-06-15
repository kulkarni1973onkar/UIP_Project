const express = require("express");
const User = require('../Models/User');
const router = express.Router();

router 

    .get('/getUsers', async (req, res) => {
        try {
            const users = await User.getAllUsers() 
            res.send(users);
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })


    .post('/login',async(req,res) => {
        try
        {
            const user = await User.login(req.body.username, req.body.password);
            res.send({...user.toObject(), password: undefined});
        }catch(error)
        {
            res.status(401).send({message: error.message});
        }
    })

    .post('/register',async(req,res) => {
        try
        {
            const user = await User.register(req.body.name,req.body.username,req.body.password, req.body.confirmpassword,req.body.email,req.body.address,req.body.mobileno);
            res.send({...user.toObject(), password: undefined});
        } 
        catch(error)
        {
            res.status(401).send({message: error.message});
        }
    })

    

    .put('/update', async(req,res) =>{
        try{
            const user=await User.updatePassword(req.body.id, req.body.password)
            res.send({...user.toObject(), password:undefined});
        }
        catch(error)
        {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete',async(req,res) =>{
        try{
            await User.deleteUser(req.body.id);
            res.send({success:"Account Deleted"});

        }
        catch(error)
        {
            res.status(401).send({message:error.message});
        }
    })

    module.exports=router;
