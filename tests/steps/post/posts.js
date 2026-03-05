import { request } from '../../utils/requests.js'

export async function createPost() {
    it('Create user post', async function () {
        const userId = global.executionVariables['userId']

        const requestBody = {
            title: 'Test Post Title',
            body: 'Test Post Body'
        }

        await request(this, 'POST', `/users/${userId}/posts`, requestBody, true, {
            statusCode: 201,
            expectedValues: [
                { path: 'title', value: requestBody.title },
                { path: 'body', value: requestBody.body },
                { path: 'user_id', value: userId }
            ],
            expectedTypes: [
                { path: 'id', type: 'number' }
            ],
            executionVariables: [
                { path: 'id', name: 'postId' },
                { path: 'title', name: 'postTitle' },
                { path: 'body', name: 'postBody' }
            ]
        })
    })
}

export async function getPost() {
    it('Get user post', async function () {
        const postId = global.executionVariables['postId']
        const userId = global.executionVariables['userId']
        const postTitle = global.executionVariables['postTitle']
        const postBody = global.executionVariables['postBody']

        await request(this, 'GET', `/posts/${postId}`, undefined, true, {
            statusCode: 200,
            expectedValues: [
                { path: 'id', value: postId },
                { path: 'user_id', value: userId },
                { path: 'title', value: postTitle },
                { path: 'body', value: postBody }
            ]
        })
    })
}

export async function deletePost() {
    it('Delete user post', async function () {
        const postId = global.executionVariables['postId']

        await request(this, 'DELETE', `/posts/${postId}`, undefined, true, {
            statusCode: 204
        })
    })
}