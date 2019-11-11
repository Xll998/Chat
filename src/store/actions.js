let action = {
    'UPDATE_USER': ({commit, state}, payload)=>{
        let {username, password } = payload;
        return axios({
            url: '/api/login',
            method: 'post',
            data: { 
              username,
              password,
            }
          }).then(
            res =>{              
              commit('UPDATE_USER',res.data);
              window.localStorage.setItem('1909_news_app',JSON.stringify(res.data));
              return {err: res.data.err, msg: res.data.msg}
            }
          )
    }
}

export default action