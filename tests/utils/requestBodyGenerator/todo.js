import { faker } from "@faker-js/faker"

export function getCreateTodoRequestBody(status) {
    // title
    // status
    return {
        title: faker.book.title(),
        status: status
    }
}