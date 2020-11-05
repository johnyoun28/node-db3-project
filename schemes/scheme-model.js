// scheme-model
const db = require('../data/db-config')

module.exports = {
    find() {
        return db('schemes')
    },
    findById(id) {
        return db('schemes').where({ id }).first()
    },
    findSteps(id) {
        return db('schemes as s')
        .join('steps as t', 's.id', 't.scheme_id')
        .select('s.scheme_name', 't.step_number', 't.instructions')
        .where({'s.id': id})
    },
    add(scheme) {
        return db('schemes').insert(acc)
    },
    update(changes, id) {
        return db('schemes').where({ id }).update(acc)
    },
    remove(id) {
        return db('schemes').where({ id }).del()
    }
}