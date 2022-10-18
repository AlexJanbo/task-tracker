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
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc        Update User
// @route       PUT /api/user/id
// @access      Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    // console.log(req.body)

    if(!user) {
        res.status(400)
        throw new Error("User not found")
    }

    if(!req.body.username || !req.body.firstName || !req.body.lastName || !req.body.email) {
        console.log('no body text')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        user: req.user.id
    }, {new: true})

    res.status(200).json(updatedUser)
})

// @desc        Change Password
// @route       PUT /api/user/change-password
// @access      Private
const changePassword = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    const { currentPassword, newPassword, confirmNewPassword } = req.body
    // console.log(currentPassword)


    if(!user) {
        res.status(400)
        throw new Error("User not found")
    }

    if(!currentPassword || !newPassword || !confirmNewPassword) {
        console.log('no body text')
        res.status(400)
        throw new Error('Please fill out all fields!')
    }

    //Hash new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)
    
    if(user && (await bcrypt.compare(currentPassword, user.password))) {

        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            password: hashedPassword,
        }, {new: true})
        res.status(200).json(updatedUser)
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
    updateUser,
    changePassword,
}