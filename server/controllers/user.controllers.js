const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

  async function registerUser (req, res) {
    try {
        const {userFirstName, userLastName, userEmail, userPassword} = req.body
    
        if(!userFirstName || !userLastName || !userEmail || !userPassword) {
            return res.status(400).json({message: 'Please fill every field in the form'})
        }

        const salt = bcrypt.genSaltSync(saltRounds)
        const hashedPassword = await bcrypt.hash(userPassword, salt)

        const newUser = await User.create({firstName: userFirstName, lastName: userLastName, email: userEmail, password: hashedPassword})
        console.log(newUser);
        
        res.status(200).json({message: 'user created succesfully', user: newUser})

    } catch (err) {
        // handling duplicatae passwords 
        if(err.code == 11000) {
            return res.json({error: 'This email is already in use'})
        }
        return console.log(err.message);
    }
}

async function login(req, res) {
    try {
        const {email, password} = req.body;
        // checking for an empty input
        if(!email && !password) {
            return res.send({message: 'please make sure you enter all your details'})
        }

        // checking if user exist and comparing passwords
        const userDoc = await User.findOne({email})
        const hashedPassword = userDoc?.password
        if (userDoc) {
            bcrypt.compare(password, hashedPassword)
            .then(res => {
                if (res) {
                   const token = jwt.sign({email,password}, process.env.JWT_SECRET) 
                   res.json({token: token, message: 'Successfully logged in'})
                }else{
                    res.json(
                        {error: 'Passwords do not match'}
                    )
                    return
                }
            })
        }
    } catch (err) {
        return res.json({message: err.message})
    }
}

module.exports = {
    registerUser,
    login
}