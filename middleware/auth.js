import {useSessionStore} from "~/stores/session";

export default defineNuxtRouteMiddleware((to, from) => {
    const session = useSessionStore()

    console.log('Middleware Auth', session.isAuthenticated)

    if (!session.isAuthenticated) {
        return navigateTo('/login');
    }
});
