import {
    createUser,
    deleteNotExistingUser,
    deleteUser,
    getUser,
    updateUser,
    createUserWithoutToken,
    updateUserWithoutToken
} from '../../steps/user/user.js'

import { generateTestData } from '../../utils/helpers.js'


before(async () => {
    await generateTestData()
})


describe('CRUD User', () => {

    beforeEach(async () => {
        await createUser()
        console.log('before hook')
    })

    afterEach(async () => {
        await deleteUser()
        console.log('after hook')
    })


    describe('CRUD User - Create user', () => {

        it('Get user account', async () => {
            await getUser()
        })

        it('Update user account', async () => {
            await updateUser()
        })

    })


    describe("CRUD User - Delete user", () => {

        it('Create user account', async () => {
            await createUser()
        })

        it('Delete user account', async () => {
            await deleteUser()
        })

    })


    describe("CRUD User - Get user", () => {

        it('Get user account', async () => {
            await getUser()
        })

    })


    describe("CRUD User - Modify user", () => {

        it('Update user account', async () => {
            await updateUser()
        })

    })


    describe.skip('Delete already deleted user', () => {

        it('Delete already deleted account', async () => {
            await deleteNotExistingUser()
        })

    })


    describe.skip('Create user without authentication token', () => {

        it('Create user account without authentication token', async () => {
            await createUserWithoutToken()
        })

    })


    describe.skip('Update user without authentication token', () => {

        it('Update user account without token', async () => {
            await updateUserWithoutToken()
        })

    })

})