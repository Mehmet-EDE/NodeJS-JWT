const user = require(('../model/user')) 

module.exports = {
    createDbTable:function(){
        user.sequelize.sync().then(result=>{
            console.log(result)
        }).catch();
    }
}