import request from "./request";
import {
  getToken
} from "./auth"; // 驗權

const api = {
  login(username, password) {
    return request({
      url: "/check/login",
      method: "post",
      data: {
        account: username,
        password: password,
        appKey: "Client",
        mobileDevice: "",
        pushKey: "",
      },
    })
  },

  getUserProfile() {
    return request({
      url: "/check/getuserprofile",
      method: "get",
      params: {
        token: getToken()
      },
    });
  },

  logout() {
    return request({
      url: "/check/logout",
      method: "post",
    });
  },

  /* 最新消息 */
  loadNews(params) {
    return request({
      url: "/newss/load",
      method: "get",
      params: params
    })
  },


  /* */
  upload(data) {
    return request({
      url: "/Files/Upload",
      method: "post",
      data,
    })
  }
  /*  */
}

export default api;
