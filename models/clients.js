module.exports = (sequelize, type) => {
    return sequelize.define('client', {
        id: {
            type: type.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: type.STRING
        },
        lastname: {
            allowNull: false,
            type: type.STRING
        },
        genre: {
            allowNull: false,
            type: type.STRING
        },
        date: {
            allowNull: false,
            type: type.DATEONLY
        },

    }, {timestamps: false})
}