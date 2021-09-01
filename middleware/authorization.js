/** 
 * middleware 每次進入頁面判斷頁面有無token
*/
export default function ({store, redirect, route}){
  console.log('[Middleware] Just Auth')
  console.log(store.getters.isAuthenticated);
  if(!store.getters.isAuthenticated){
    // 如果沒有登入導到 login頁面
    redirect('/')
  } else if(store.getters.isAuthenticated && route.name === 'index') {
    // 防止使用者再以登入狀態回到登入頁，之後應該還會再加入註冊頁面(避免使用者直接改url可以看到)
    redirect({name: 'news'})
  }
}
