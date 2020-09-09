const publicRoutes = {
    'GET /hello': 'BasicController.hello',
    'GET /getUsers': 'UserController.getUsers',
    'GET /getUserById': 'UserController.getUserById',
    'POST /createUser': 'UserController.createUser',
};

module.exports = publicRoutes;
