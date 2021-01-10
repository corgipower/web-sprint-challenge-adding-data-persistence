// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
    return db.select('*').from('projects');
}

function add(project) {
    return db.insert(project).into('projects');
}

module.exports = {
    find,
    add,
}