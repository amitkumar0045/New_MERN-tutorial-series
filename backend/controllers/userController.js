const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//----><---- register new USER
const registerUser = asyncHandler(async (req, res) => {
    // const registerUser = async (req, res) => {  // >> without asyncHandler

    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400)
        throw new Error("User Allredy Exists")
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            pic: user.pic,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            // password: user.password,
        });
    } else {
        res.status(400)
        throw new Error('!Error Occured ! User not Found !')
    }
    // res.json({
    //     name,
    //     email,
    // });
});



module.exports = { registerUser }