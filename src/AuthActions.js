export function storeUser(user) {
    return {
        type: 'STORE_USER',
        payload: user,
    }
}

export function storeUserError() {
    return {
        type: 'STORE_USER_ERROR',
    }
}
