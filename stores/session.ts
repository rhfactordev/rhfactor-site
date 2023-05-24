import {acceptHMRUpdate, defineStore} from "pinia";


export const useSessionStore = defineStore('session', {
    state: () => ({
        user : null as User | null,
    }),

    getters: {
         username: (state) => state.user?.name,
    },

    actions: {
        login(user: User) {
            this.user = user
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSessionStore, import.meta.hot))
}
