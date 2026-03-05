import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import { config } from '../../../config.js'
import { generateRandomEmail } from '../helpers.js'
import { faker } from '@faker-js/faker'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function getCreateUserRequestBody() {

    const envConfig = config[process.env.ENV]

    return {
        name: envConfig.username,
        email: `qa_${Date.now()}@test.com`,
        gender: envConfig.gender,
        status: envConfig.status
    }
}

export async function getUpdateUserRequestBody() {

    return {
        name: `${config[process.env.ENV].username}Updated`,
        status: config[process.env.ENV].status,
        gender: config[process.env.ENV].gender,
        email: await generateRandomEmail()
    }

}