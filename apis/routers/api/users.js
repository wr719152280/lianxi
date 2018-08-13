const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const Uesr = require('../../models/User')

// test
router.get('/test',(req,res)=>{
    res.json({msg:"test"})
})

//register
router.post('/register',(req,res)=>{
    Uesr.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            return res.json({msg:"0"})
        }else{
            const newUser = new Uesr({
                email:req.body.email,
                password:req.body.password1
            })
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(newUser.password, salt, (error, hash)=> {
                    if(error){
                        throw error
                    } else{
                    newUser.password = hash
                    newUser.save()
                        .then(user=>{
                            return res.json({msg:"1"})
                        })
                        .catch(err=>{
                            return res.json(err)
                        })
                    }
                });
            });
        }
    })
})

// login

router.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    Uesr.findOne({email})
        .then(user=>{
            if(!user){
                return res.json({msg:"0"})
            }else{
                bcrypt.compare(password, user.password)
                    .then(isMath=>{
                        if(isMath){
                            res.json({msg:"1"})
                        }else{
                            return res.json({msg:"2"})
                        }
                    })
            }
        })
})

module.exports = router