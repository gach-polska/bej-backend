const User = require('../models/user');

const UserController = () => {
    const createUser = async (req, res) => {
        const { body } = req;
        try {
            const user = await User.create({
                email: body.email,
            });
            return res.status(201).json(user);
        } catch (err) {
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const getUsers = async (req, res) => {
        await User.findAll()
            .then(users => {
                res.status(200).json(users);
            })
            .catch(() => {
                return res.status(500).json({ msg: 'Internal server error' });
            });
    };

    const getUserById = async (req, res) =>
        res.status(200).json({ hello: 'get' });

    const updateUserById = async (req, res) =>
        res.status(200).json({ hello: 'updated' });

    const deleteUserById = async (req, res) =>
        res.status(200).json({ hello: 'delete' });

    return {
        createUser,
        getUsers,
        getUserById,
        updateUserById,
        deleteUserById,
    };
};

module.exports = UserController;
