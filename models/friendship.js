const Sequelize = require('sequelize');

const db = require('../../models/index');

const friends = 'friends';


const Friendship = db.sequelize.define('Friendship', {
    userOneId: {
      type: Sequelize.INTEGER,
    },
    userTwoId: {
      type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.TINYINT,
      }

  }, { friends });


module.exports = Friendship; 
