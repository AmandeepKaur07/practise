const{ getEmailSend } = require("../service/service");

var func = {
    getLoginPost:(req,res,next)=>{
        getEmailSend(req)
        res.json({"Name": req.body, "A":"is abc"})
    }
}
module.exports = func;