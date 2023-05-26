import {acceptHMRUpdate, defineStore} from "pinia";
import {useLocalStorage} from '@vueuse/core';

const initialUser : User = { name : null , id : null }
const initialUserToken : UserToken = { accessToken : null, expiresIn : null }

export const useSessionStore = defineStore('session', {
    state: () => ({
        userToken : useLocalStorage('userToken', initialUserToken) ,
        user : useLocalStorage('user', initialUser)
    }),
    actions: {
        login(userToken: UserToken) {
            this.userToken = userToken
        },
        logout(){
            this.userToken = initialUserToken
        }
    },
    getters: {
        isAuthenticated: state => state.userToken != null && state.userToken.accessToken != null,
        userDisplayName : state => state.userToken.expiresIn,
        token: state => state.userToken.accessToken
    },
    hydrate(state, initialState) {
        // @ts-ignore
        state.userToken = useLocalStorage('userToken', initialUserToken)
        // @ts-ignore
        state.user = useLocalStorage('user', initialUser)
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSessionStore, import.meta.hot))
}
