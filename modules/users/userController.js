const userModel = require("../../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const logger = require('../../utils/logger');
const userLogger = new logger('user');

const authenticateUser = async(req, res) => {
    userLogger.info("Authenticate user");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        const {username, password} = req.body;
        console.log(username, password);
        let user = await userModel.findOne({
            username
        });
        console.log(user);
        if(user) {
            if(bcrypt.compareSync(password, user.password)) {
                const options = { expiresIn: "72h" };
                const payload = {
                    id: user._id
                };
                console.log(payload);
                let token = jwt.sign(payload, process.env.JWT_SECRET, options);
                result.data = token;
                result.status = 1,
                result.message = "Successfully Authenticated";
                res.status(200).send(result);
            } else {
                result.message = "Invalid credentials";
                res.status(200).send(result);
            }
        } else {
            result.message = "User not found";
            res.status(200).send(result);
        }
    } catch (error) {
        userLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
};

const storeUserData = async(req, res) => {
    userLogger.info("Add user");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        const {username, password} = req.body;
        let user = new userModel();
        const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
        const hashedPass = bcrypt.hashSync(password, salt);
        user.username = username;
        user.password = hashedPass;
        await user.save();
        result.data = user;
        result.status = 1,
        result.message = "User added successfully";
        res.status(200).send(result);
    } catch (error) {
        userLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
};

const updateUserData = async(req, res) => {
    userLogger.info("Update user");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        const {username, password, id} = req.body;
        let user = await userModel.findOne({_id: id});
        if(username)
            user.username = username
        if(username) {
            const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
            const hashedPass = bcrypt.hashSync(password, salt);
            user.password = hashedPass;
        }
        user.updated_on = new Date();
        await user.save();
        result.data = user;
        result.status = 1,
        result.message = "User updated successfully";
        res.status(200).send(result);
    } catch (error) {
        userLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
};

const getUsers = async(req, res) => {
    userLogger.info("Get all users");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        const users = await userModel.find();
        result.data = users;
        result.status = 1,
        result.message = "users";
        res.status(200).send(result);
    } catch (error) {
        userLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
}

const getUserById = async(req, res) => {
    userLogger.info("Get user details");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        const id = req.params.id;
        const user = await userModel.findOne({_id: id});
        result.data = user;
        result.status = 1,
        result.message = "User Data";
        res.status(200).send(result);
    } catch (error) {
        userLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
}

const deleteUser = async(req, res) => {
    userLogger.info("Delete user");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        const id = req.params.id;
        await userModel.deleteOne({_id: id});
        result.status = 1;
        result.message = "User Deleted successfull";
        res.status(200).send(result);
    } catch (error) {
        userLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
}

module.exports = {
    authenticateUser,
    getUsers,
    storeUserData,
    updateUserData,
    getUserById,
    deleteUser
}