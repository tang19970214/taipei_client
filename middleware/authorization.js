/** 
 * middleware 每次進入頁面判斷頁面有無token
*/
export default function ({store, redirect, route}){
  console.log('[Middleware] Just Auth')
  console.log(store.getters.isAuthenticated);
  if (!store.getters.isAuthenticated) {
    // 如果沒有登入導到 login頁面
    switch (route.name) {
      // 把不需要權限的加入下面的case當中
      /**
       * 如果用if(route.name === 'index' || route.name === 'contact' || route.name === news')
       */
      case 'index':
        // 如果已經在登入頁頁，不處理
        break;
      case 'contact':
        // 如果已經在聯繫客服，不處理
        break;
      case 'news':
        // 如果已經在最新消息頁頁，不處理
        break;
      default:
        redirect({name: 'index'})
        break;
    }
  } else {
    // 防止使用者再以登入狀態回到登入頁，之後應該還會再加入註冊頁面(避免使用者直接改url可以看到)
    if (route.name === 'index') {
      redirect({name: 'news'})
    }
  }
}
