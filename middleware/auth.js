import {useSessionStore} from "~/stores/session";

export default defineNuxtRouteMiddleware((to, from) => {
    const session = useSessionStore()
    if (!session.isAuthenticated) {
        return navigateTo('/login');
    }
});
