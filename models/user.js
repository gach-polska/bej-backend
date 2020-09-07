const Sequelize = require('sequelize');


const users = 'users';


const User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    nickname: {
      type: Sequelize.STRING,
      unique: true,
    },
    avatarUrl: {
        type: Sequelize.STRING,
      },
    backgroundImageUrl: {
      type: Sequelize.INTEGER
    },
    pointsForNotGiving: {
      type: Sequelize.INTEGER
    },
    meetingsCount: {
      type: Sequelize.INTEGER
    },
      
  }, { users });


  
module.exports = User;