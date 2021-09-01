export default function ({store,redirect}){
  console.log('[Middleware] Just Auth')
  console.log(store.getters.isAuthenticated);
  if(!store.getters.isAuthenticated){
    redirect('/')
  }
}
