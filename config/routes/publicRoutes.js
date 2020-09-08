const publicRoutes = {
    'GET /hello': 'BasicController.hello',
    'GET /getUsers': 'UserController.getUsers',
    'GET /getUserById': 'UserController.getUserById',
    'POST /createUser': 'UserController.createUser',
    'PUT /updateUser': 'UserController.updateUser',
    'DELETE /deleteUser': 'UserController.deleteUser',
};

module.exports = publicRoutes;
