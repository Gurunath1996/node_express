const {Register}=require('../models/register-model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const lodash = require('lodash')
const express =require('express')
const router=express.Router()
const Joi=require('joi')

router.post('/', async (req,res)=>{
    const result= validateCred(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
    } 
    try{
    let register= await Register.findOne({email:req.body.email})
    if(!register) return res.status(400).send('Invalid email or password')

    const valid= await bcrypt.compare(req.body.password, register.password)
    if(!valid) return res.status(400).send('Invalid email or password')

    const token = jwt.sign({_id: register._id, role: register.role },'verySecreate')

    res.send(token)
    }
    catch(err){res.send(err)}
    
    
})

function validateCred(register){
    const schema= Joi.object({
        email: Joi.string()
                    .required()
                    .trim()
                    .max(150)
                    .min(5),
        password: Joi.string()
                        .required()
                        .min(5)
                        .max(150)
    });

    return schema.validate(register)
}
module.exports=router