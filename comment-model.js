const Joi = require('joi')
const mongoose = require('mongoose')



    const Comment = mongoose.model('Comment', new mongoose.Schema({
        postId:{
            type: String,
            required: true,
        },
        comm:{
            type: String,
            required:true,
            maxlength:150
        }
    }))

    function validateComment(comment){
        const schema= Joi.object({
            postId: Joi.string()
                    .required()
                    .trim(),
            comm: Joi.string()
                    .required()
                    .trim()
                    .max(150)
        })
        return schema.validate(comment)
    }

module.exports={Comment, validateComment}
