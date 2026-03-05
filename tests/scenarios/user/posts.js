import { createUser, deleteUser } from '../../steps/user/user.js'
import { createPost, getPost, deletePost } from '../../steps/post/posts.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('User Posts', () => {

    beforeEach(async () => {
        await createUser()
        console.log('before hook')
    })

    afterEach(async () => {
        await deleteUser()
        console.log('after hook')
    })

    describe('Create user Post scenario', () => {
        it('Step 1: Create user account', async () => {
            await createUser()
        })

        it('Step 2: Delete user account', async () => {
            await deleteUser()
        })

        it('Step 3: Create user post', async () => {
            await createPost()
        })

        it('Step 4: Get user post', async () => {
            await getPost()
        })

        it('Step 5: Delete user post', async () => {
            await deletePost()
        })

    })
})