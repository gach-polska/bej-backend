const publicRoutes = {
    'GET /hello': 'BasicController.hello',
    'GET /getUserFriendsById': 'FriendshipController.getUserFriendsById',
    'POST /createFriendship': 'FriendshipController.createFriendship',
    'PUT /updateFriendship': 'FriendshipController.updateFriendship',
    'DELETE /removeFriendship': 'FriendshipController.removeFriendship',
};

module.exports = publicRoutes;