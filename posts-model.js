const Joi = require('joi')
const mongoose = require('mongoose')



    const Post = mongoose.model('Post', new mongoose.Schema({
        title:{
            type: String,
            required: true,
            uppercase: true,
            minlength: 5,
            maxlength:50
        },
        content:{
            type: String,
            required:true,
            minlength:10,
            maxlength:150
        },
        author:{
            type: String,
            maxlength:15,
            required:true
        },
        imageURL:{
            type:String
        },
        date:{
            type: Date,
            required:true,
            default:Date.now
        }
    }))

    function validatePosts(post){
        const schema= Joi.object({
            title: Joi.string()
                    .required()
                    .trim()
                    .min(5)
                    .max(50),
            content: Joi.string()
                    .required()
                    .trim()
                    .min(10)
                    .max(150),
            author: Joi.string().required().max(15).trim(),
            imageURL: Joi.string(),
            date: Joi.date().required()
        })
        return schema.validate(post)
    }

module.exports={Post, validatePosts}
