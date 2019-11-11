let mutations = {
    UPDATE_USER: (state, payload) =>{
        state.user = payload
    },
    CLEAR_USER: (state, payload) =>{
        window.localStorage.removeItem('1909_news_app');
        state.user = payload
    },
    UPDATE_BELOADING: (state, payload) => {
        state.BeLoading = payload
    },
    UPDATE_BEFOO: (state, payload) => {        
        state.BeFoo = payload
    },
    ADD_CHAT:(state, payload) => {
        // console.log(JSON.stringify(state.ChatMst).indexOf(JSON.stringify(payload)));
        if(JSON.stringify(state.ChatMst).indexOf(JSON.stringify(payload)) == -1 ){
            state.ChatMst.unshift(payload)                    
        }                
    }
}

export default mutations