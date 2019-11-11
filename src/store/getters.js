let getters = {
    'user': (state) =>{
        return state.user.data
    },
    'Beloading': (state) => {
        return state.BeLoading
    },
    'ChatMst': (state) => {
        return state.ChatMst
    }
}

export default getters