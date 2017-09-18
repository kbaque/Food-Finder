const bcrypt = require('bcryptjs');
const User = require('../../models/user');

function comparePass(userPassword, databasePassword) {
    return bcyrpt.compareSync(userPassword, databasePassword);
}

module.exports = {
    comparePass,
}