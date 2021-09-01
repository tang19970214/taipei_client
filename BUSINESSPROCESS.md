# Taipei Client
This is about taipei_client project business process
## folder structure
api -
    - api:　共用api(之後可再分folder出來，個別專用)
    - auth: set/get/remove Cookies 
    - request: customized axios with interceptors and errorHandlers

middleware -
    - authorization: 每次進入頁面，透過store.getter取得權限(布林值，會判斷store的state.token)，若沒有則導至登入頁面
    - check-auth: 每次進入頁面 initAuth，並設token到store

nuxt.config.js
    - router: middleware 引入順序有關係。例如: ['check-auth','authorization']，則會先call: check-auth 、再call authorization。