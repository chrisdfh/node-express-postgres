const getTodos = require('./get-todos');
const getTodo = require('./get-todo');
const createTodo = require('./create-todo');
const updateTodo = require('./update-todo');
const deleteTodo = require('./delete-todo');

module.exports = {
    paths:{
        '/tag':{
            ...getTodos,
            ...createTodo
        },
        '/tag/{id}':{
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        }
    }
}