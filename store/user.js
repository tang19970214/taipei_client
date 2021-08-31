import { getToken, setToken, removeToken } from '../api/auth'

export const state = () => ({
  token:null,
})

export const  mutations = {
  setToken(state, token){
    state.token = token
  },
  clearToken(state){
    state.token = null
  }
}

export const actions = {
  authenticateUser(vuexContext, authData){
    vuexContext.commit('setToken',result.idToken)
    localStorage.setItem('token', result.idToken)
    setToken(result.idToken)
  },
  initAuth(vuexContext, req){
    let token = null
    if(req){
      if(!req.headers.cookie){
        return;
      }  
    }else if(process.client){
      token = localStorage.getItem('token')
    }
    vuexContext.commit('setToken', token)
  },
  logout(vuexContext){
    vuexContext.commit('clearToken')
    removeToken('jwt')
    
    if(process.client){
      localStorage.removeItem("token")
    }
  }
}

export const getters = {
  isAuthenticated(state){
    return state.token != null
  }
}