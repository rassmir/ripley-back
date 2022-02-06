module.exports = (sequelize, type) => {
    return sequelize.define('average', {
        avg: type.DOUBLE
    }, {timestamps: false, id: false})
}