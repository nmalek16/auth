const PORT = process.env.PORT 

import express from 'express'
import users from './routes/users.js'
const app = express()

app.use(express.json())
app.use("/api/user" , users)



app.listen(PORT , ()=>{
    console.log(`server is running on PORT ${PORT}`)
})