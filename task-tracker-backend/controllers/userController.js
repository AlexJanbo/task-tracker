const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc        Register new user
// @route       POST /api/users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
    try {
        const { username, firstName, lastName, email, password } = req.body
        if( !username || !firstName || !lastName || !email || !password) {
            res.status(400).send("Please add all fields")
        }
        const userEmailExists = await User.findOne({email})
        if(userEmailExists) {
            res.status(400)
            throw new Error('Email already in use')
        }
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
            role: "Developer",
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
                role: user.role,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error("Invalid user data")
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
    
})

// @desc        Authenticate a user
// @route       POST /api/users/login
// @access      Public
const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})
        if(user && (await bcrypt.compare(password, user.password))) {
            res.json({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: generateToken(user._id),
                image: user.image,
                role: user.role,
            })
        } else {
            res.status(400)
            throw new Error('Invalid credentials')
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Update User
// @route       PUT /api/user/id
// @access      Private
const updateUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        console.log(req.body)
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
        }, {new: true})
        res.status(200).json({
            username: updatedUser.username,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            user: req.user.id,
            image: req.user.image,
            token: generateToken(user._id)
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
    
})

// @desc        Change Password
// @route       PUT /api/user/change-password
// @access      Private
const changePassword = asyncHandler(async (req, res) => {
    try {
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
            res.status(200).json({
                username: updatedUser.username,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                user: req.user.id,
                image: req.body.image,
                token: generateToken(user._id),
                
            })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Change user profile picture
// @route       Put /api/users/change-profile-picture
// @access      Private
const changeProfilePicture = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user.id)

        if(!user) {
            res.status(400)
            throw new Error("User not found")
        }
        // console.log(req.headers)
        // console.log(req.body.image)

        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            image: req.body.image,
    
        }, {new: true})

        // console.log("updated user:" + updatedUser)

        res.status(200).json({
            username: updatedUser.username,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            user: req.user.id,
            image: req.body.image,
            token: generateToken(user._id),

        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})


// @desc        Get user data
// @route       GET /api/users/me
// @access      Private
const getUser = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// JWT generation
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// @desc        Get all users
// @route       GET /api/users/get-all-users
// @access      Private
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({})
        if(users) {
            res.status(200).send(users)
        }
        else {
            res.status(404)
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Change Role
// @route       PUT /api/user/change-role
// @access      Private
const changeRole = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.body.id)
        // console.log("req.body:" + req.body)
        if(!user) {
            res.status(404)
            throw new Error("User not found")
        }
        const updatedUser = await User.findByIdAndUpdate(req.body.id, {
            role: req.body.role,

        }, {new: false})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// @desc        Get user information from Id
// @route       GET /api/user/:id
// @access      Private
const getUserInformation = asyncHandler(async (req, res) => {

    try {
        // const userId = req.body.userId
        const { memberIds } = req.body
        // const ObjectIds = memberIds.map((id) => { return ObjectId(id) });
        // console.log(ObjectIds)

        let memberArray = []
        
        await User.find({ _id: { $in: memberIds}})
            .then(users => {
                users.forEach(user => {
                    if(!memberArray.includes(user)) {
                        memberArray.push(user)
                    }
                })
            })
        // console.log(memberArray)


        if(memberArray) {
            res.status(200).json(memberArray)
        } 
        else {
            res.status(404)
            throw new Error("Users not found")
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})



module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    changePassword,
    changeProfilePicture,
    getAllUsers,
    changeRole,
    getUserInformation,
}