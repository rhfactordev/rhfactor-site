import {acceptHMRUpdate, defineStore} from "pinia";
import {useLocalStorage} from '@vueuse/core';

export const useSessionStore = defineStore('session', {
    state: () => ({
        user : useLocalStorage('user', {})
    }),
    actions: {
        login(user: User) {
            this.user = user
        },
    },
    hydrate(state, initialState) {
        state.user = useLocalStorage('user', {})
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSessionStore, import.meta.hot))
}
