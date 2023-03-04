const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json({limit:'100mb'}))
const config=require('./config')
app.set('apiSecretKey',config.apiSecretKey)

const verify=require('./middleware/authToken')

const initDB=require('./Utilities/Init')
initDB.createDbTable();

const session=require('./routes/Session')

app.use('/',session);
app.listen(5858,()=>{
    console.log("code running on port 5858")
})