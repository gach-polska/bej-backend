const publicRoutes = {
    'GET /hello': 'BasicController.hello',
    'GET /getUserFriendsById': 'FriendshipController.getUserFriendsById',
    'POST /createFriendship': 'FriendshipController.createFriendship',
    'PUT /updateFriendship': 'FriendshipController.updateFriendship',
    'DELETE /removeFriendship': 'FriendshipController.removeFriendship',
    'GET /getUsers': 'UserController.getUsers',
    'GET /getUserById': 'UserController.getUserById',
    'POST /createUser': 'UserController.createUser',
    'PUT /updateUser': 'UserController.updateUser',
    'DELETE /deleteUser': 'UserController.deleteUser',
};

module.exports = publicRoutes;