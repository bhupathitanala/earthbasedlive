const initialState = {
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'STORE_USER':
            return {
                ...state,
                user: action.payload,
            }

        case 'STORE_USER_ERROR':
            return {
                user: null,
            }

        default:
            return state
    }
}