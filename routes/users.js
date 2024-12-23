
import express from 'express'
import bcrypt from 'bcrypt'

const router = express.Router()



let Users = [

]

router.post('/signup' , async (req,res) => {
    try {
        const {email ,  username , password} = req.body
        let user = Users.find((x)=> x.email === email)
        if (user) {
            res.status(404).send('wrong email or password')
        }
        let hashedPass = await bcrypt.hash(password , 10)
        console.log(hashedPass) 
        Users.push({email , username , password : hashedPass})
        res.status(201).send(Users)
        
    } catch (error) {
        console.log(error)
    }
})

router.post('/login' , async (req,res )=>{
    try {
        const {email , password} = req.body
        let user = Users.find((x)=> x.email === email)
        if (!user) {
            res.status(404).send('wrong email or password')
            }
            let MatchedPassword = await bcrypt.compare(password , user.password)
            if (!MatchedPassword) {
                res.status(404).send('email or password unmatched')
            }
            res.status(200).send(`welcome back ${user.username} `)
        
        
    } catch (error) {
        console.log(error)
    }
})

export default router