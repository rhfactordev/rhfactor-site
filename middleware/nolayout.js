export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Middleware:NoLayout', to.fullPath == '/links')
    if( to.fullPath == '/links' ){
        setPageLayout('default')
    }
});
