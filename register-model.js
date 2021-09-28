const Joi = require('joi')
const mongoose = require('mongoose')



    const Register = mongoose.model('Register', new mongoose.Schema({
        name:{
            type: String,
            required: true,
            maxlength:10
        },
        email:{
            type: String,
            required:true,
            maxlength:150,
            minlength:5,
            unique:true
        },
        password:{
            type: String,
            required:true,
            maxlength:150,
            minlength:5
        },
        phone:{
            type: Number,
            required:true,
            // maxlength:14,
            minlength:10,
            unique:true
        }, 
        role:{
            type: String,
            enum:['admin','user']
            // maxlength:5,
            // minlength:4,
        }
    }))

    function validateUser(register){
        const schema= Joi.object({
            name: Joi.string()
                    .required()
                    .trim()
                    .max(10),
            email: Joi.string()
                    .required()
                    .trim()
                    .max(150)
                    .min(5).email(),
            password: Joi.string()
                        .required()
                        .min(5)
                        .max(150),
            phone: Joi.number()
                    .required()
                    .min(10)
                    ,
            role: Joi.string()
                    // .min(5)
                    // .max(4)
        })
        return schema.validate(register)
    }

module.exports={Register, validateUser}
