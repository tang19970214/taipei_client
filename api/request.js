import axios from 'axios'; //引用axios
// import store from "@/store/index.js";
// import Swal from "sweetalert2";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    token && (config.headers["X-Token"] = `${token}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response 攔截
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      response
    } = error;

    if (response) {
      errorHandle(response.status, response.data.error, response);
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

// 錯誤捕捉
const errorHandle = (status, msg, response) => {
  switch (status) {
    case 400:
      console.log(response);
      // to404Page();
      break;

    case 401:
      console.log(response);
      tokenExpire();
      break;

    case 403:
      console.log(response);
      // to404Page();
      break;

    case 404:
      console.log(response);
      // to404Page();
      break;

    case 500:
      console.log(response);
      // to404Page();
      break;

    default:
      console.log(response);
      // to404Page();
      break;
  }
};

const tokenExpire = () => {
  // let timerInterval
  // Swal.fire({
  //   title: '登入逾時...請重新登入!',
  //   html: '將於 <b></b> 秒後跳轉至登入頁.',
  //   timer: 2000,
  //   timerProgressBar: true,
  //   didOpen: () => {
  //     Swal.showLoading()
  //     timerInterval = setInterval(() => {
  //       const content = Swal.getHtmlContainer()
  //       if (content) {
  //         const b = content.querySelector('b')
  //         if (b) {
  //           b.textContent = (Swal.getTimerLeft() / 1000).toFixed(0)
  //         }
  //       }
  //     }, 100)
  //   },
  //   willClose: () => {
  //     clearInterval(timerInterval)
  //   }
  // }).then((result) => {
  //   if (result.dismiss === Swal.DismissReason.timer) {
  //     store().dispatch("FedLogOut");
  //     window.$nuxt.$router.replace({
  //       name: "login"
  //     })
  //   }
  // })
};

export default service
