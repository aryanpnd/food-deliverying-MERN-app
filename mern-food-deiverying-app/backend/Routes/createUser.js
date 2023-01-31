const express = require('express')
const router = express.Router()
const User = require('../Models/Users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const jwtSecretKey = "ThisIsJwtSecretKey"

router.post("/createuser", [body('email').isEmail(), body('name').isLength({ min: 5 }),
body('password').isLength({ min: 5 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(req.body.password,salt)
    
    try {
        await User.create({
            name: req.body.name,
            password: hashPassword,
            email: req.body.email,
            location: req.body.location
        }).then(res.json({ success: true }))

        // Sending response if data is recieved


    }
    catch (error) {
        console.log(`-------- Error : ${error} ---------`)
        res.json({ success: false })
    }
})




router.post("/loginuser",[body('email').isEmail(),
body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email
    try {
        let userData = await User.findOne({email})
        if (!userData) {
            return  res.status(400).json({ errors: "Wrong Username And Password!!" });
        }

        let passwordCompare = await bcrypt.compare(req.body.password,userData.password);

        if (!passwordCompare) {
            return  res.status(400).json({ errors: "Wrong Username And Password!!" });
        }

        const userAuthData = {
            user:{
                id: userData.id
            }
        }
        const authToken = jwt.sign(userAuthData,jwtSecretKey)

        return res.json({ success: true ,AuthToken:authToken})
    }
    catch (error) {
        console.log(`-------- Error : ${error} ---------`)
        res.json({ success: false })
    }
})

module.exports = router 