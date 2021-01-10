// build your `Task` model here
const db = require('../../data/dbConfig');

function find() {
    return db.select('*').from('tasks');
}

function add(task) {
    return db.insert(task).into('tasks');
}

module.exports = {
    find,
    add,
}