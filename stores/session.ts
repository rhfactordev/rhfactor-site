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
            console.log('Efetuando login', userToken)
            this.userToken = userToken
        },
        logout(){
            console.log('Efetuando logout')
            this.userToken = initialUserToken
        }
    },
    getters: {
        isAuthenticated: (state) => {
            return state.userToken != null
                && state.userToken.accessToken != null
        },
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
