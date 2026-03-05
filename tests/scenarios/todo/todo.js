import { createUser, deleteUser } from '../../steps/user/user.js'
import { createTodo, deleteTodo, updateTodo, getAllUserTodos } from '../../steps/todo/todo.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('Todos', () => {

    createUser()

    describe('CRUD Todos', () => {

        createTodo('pending')
        deleteTodo()

    })

    describe('CRUD Todos - Update title', () => {

        createTodo('pending')

        updateTodo({
            title: 'New Title',
            status: 'pending'
        })

        deleteTodo()

    })

    describe('CRUD Todos - get all user todos', () => {

        createTodo('pending')
        getAllUserTodos()

    })

    deleteUser()

})