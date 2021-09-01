import { setToken, removeToken } from '../api/auth'
import $api from '../api/api'

export const state = () => ({
  token: null,
})
/**
 * @author Jung
 * cookie、localStorage、store
 */
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
          window.localStorage.setItem("taipei_client", data.token)
          commit("setToken", data.token)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  initAuth(vuexContext, req){ // have called by middlewate
    console.log(vuexContext);
    let token = null
    if(req){
      if(!req.headers.cookie){
        return;
      }
      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith("taipei_client="))
      if(!jwtCookie) return
      token = jwtCookie.split('=')[1]
    }else if(process.client){
      token = localStorage.getItem('taipei_client')
    }

    if(!token){
      vuexContext.dispatch('logout')
      return;
    }
    vuexContext.commit('setToken', token)
  },
  logout(vuexContext){
    removeToken('taipei_client')
    vuexContext.commit('clearToken')
    
    if(process.client){
      localStorage.removeItem("taipei_client")
    }
  }
}

export const getters = {
  isAuthenticated(state){
    return state.token != null
  }
}