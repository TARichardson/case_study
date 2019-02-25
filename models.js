const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'caseStudy',
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
        underscored: true
    }
});

module.exports = {
    sequelize,
};