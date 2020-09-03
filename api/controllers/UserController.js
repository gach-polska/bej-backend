const UserController = () => {
    const createUser = async (req, res) =>
        res.status(200).json({hello: "created"});

    const getUsers = async (req, res) =>
        res.status(200).json({hello: "get"});

    const getUserById = async (req, res) =>
        res.status(200).json({hello: "get"});

    const updateUserById = async (req, res) =>
        res.status(200).json({hello: "updated"});

    const deleteUserById = async (req, res) =>
        res.status(200).json({hello: "delete"});

    return {
        createUser,
        getUsers,
        getUserById,
        updateUserById,
        deleteUserById
    }
};

module.exports = UserController;