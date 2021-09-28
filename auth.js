const jwt=require('jsonwebtoken')

function auth(req,res,next){
    const token=req.header('x-auth-token')
    if(!token) return res.status(401).send('Access denied...')

    try{
        const decodedToken = jwt.verify(token,'verySecreate')
        req.register=decodedToken
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token')
    }

}

module.exports=auth;