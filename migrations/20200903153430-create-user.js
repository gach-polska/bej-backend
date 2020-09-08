'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nickname: {
                type: Sequelize.STRING,
            },
            avatarUrl: {
                type: Sequelize.STRING,
            },
            email: {
                unique: true,
                type: Sequelize.STRING,
            },
            pointsForNotGiving: {
                type: Sequelize.INTEGER,
            },
            meetingsCount: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    },
};
