module.exports = function(req,res,next){
    if(req.register.role==='user') return res.status(403).send('Acess denied')
    next()
}