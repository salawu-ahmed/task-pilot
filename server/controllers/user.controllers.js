const User = require('../models/user')
const bcrypt = require('bcrypt')
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

function login(req, res) {
    const {email, password} = req.body;
    res.send(`Hello ${email}, welcome back`)
}

module.exports = {
    registerUser,
    login
}