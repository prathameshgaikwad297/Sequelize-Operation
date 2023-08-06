
module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('employee', {
        empid: {
            type: Sequelize.INTEGER,
            autoIncreament: true,
            primaryKey: true
        },
        empName: {
            type: Sequelize.String(200),
            allowNull: false
        },
        empMobile: {
            type: Sequelize.String(200),
            allowNull: false
        },
        empSalary: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        empCompany: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }, {
        freezeTableName: true,
    });

    return model;

}