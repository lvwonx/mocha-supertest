import { deleteNotExistingUser } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})
