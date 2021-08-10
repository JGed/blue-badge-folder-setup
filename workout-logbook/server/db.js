const Sequelize = require('sequelize');
const sequelize = new Sequelize('workout-logbook', 'postgres', 'password', {
    host: 'localhost', dialect: 'postgres'})


sequelize.authenticate()
    .then(
        () => {
            console.log('Connected to journal-walkthrough postgres database');
        })
    .catch(err => console.log(err))

module.exports = sequelize;