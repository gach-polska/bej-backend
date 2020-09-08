'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            nickname: DataTypes.STRING,
            avatarUrl: DataTypes.STRING,
            email: DataTypes.STRING,
            pointsForNotGiving: DataTypes.INTEGER,
            meetingsCount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'User',
        }
    );
    return User;
};
