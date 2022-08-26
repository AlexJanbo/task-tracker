const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc        Register new user
// @route       POST /api/users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, firstName, lastName, email, password } = req.body

    if( !username || !firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user email exists
    const userEmailExists = await User.findOne({email})

    if(userEmailExists) {
        res.status(400)
        throw new Error('Email already in use')
    }

    //Check if username exists
    const usernameExists = await User.findOne({username})

    if(usernameExists) {
        res.status(400)
        throw new Error('Username already in use')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc        Authenticate a user
// @route       POST /api/users/login
// @access      Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    // Check for user email
    const user = await User.findOne({email})
    
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc        Get user data
// @route       GET /api/users/me
// @access      Private
const getUser = asyncHandler(async (req, res) => {
    

    res.status(200).json(req.user)
})

// JWT generation
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
}