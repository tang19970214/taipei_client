import { getToken, setToken, removeToken } from '../api/auth'
import $api from '../api/api'

export const state = () => ({
  token: null,
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
  Login({commit}, userInfo) {
    return new Promise((resolve, reject) => {
      $api.login(userInfo.username, userInfo.password)
        .then((response) => {
          const data = response.data
          setToken(data.token)
          window.localStorage.setItem("tokenClient", data.token)
          commit("SET_TOKEN", data.token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
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