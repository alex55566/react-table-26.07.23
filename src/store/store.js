import { makeAutoObservable } from 'mobx'

class Users {
    users = []
    isAdd = false
    isTouch = false

    constructor() {
        makeAutoObservable(this)
    }

    addNewUser(user) {
        this.users.push(user)
    }

    addStorage(users) {
        this.users = users
    }

    deleteCurrentUser(id) {
        this.users = this.users.filter(user => user.id !== id)
    }
    isAdding(state) {
        this.isAdd = state
    }
    isTouching(state) {
        this.isTouch = state
    }
}

export const users = new Users()