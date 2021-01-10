// build your `Resource` model here
const db = require('../../data/dbConfig');

function find() {
    return db.select('*').from('resources');
}

function add(resource) {
    return db.insert(resource).into('resources');
}

module.exports = {
    find,
    add,
}