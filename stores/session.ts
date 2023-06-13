import {acceptHMRUpdate, defineStore} from "pinia";
import {useLocalStorage} from '@vueuse/core';

const initialUser : User = { name : null , id : null }
const initialUserToken : UserToken = { accessToken : null, expiresIn : null }

const hasntExpired = (lastLogin, expiresIn) =>{
    lastLogin.setMinutes( null, expiresIn )
    return lastLogin > new Date()
}

export const useSessionStore = defineStore('session', {
    state: () => ({
        userToken : useLocalStorage('userToken', initialUserToken) ,
        user : useLocalStorage('user', initialUser),
        lastLoginDate: null,
    }),
    actions: {
        login(userToken: UserToken) {
            this.userToken = userToken
            this.lastLoginDate = new Date()
        },
        logout(){
            this.userToken = initialUserToken
            this.lastLoginDate = null
        }
    },
    getters: {
        isAuthenticated: state => state.userToken != null
            && state.userToken.accessToken != null
            && state.userToken.expiresIn != null
            && state.lastLoginDate != null
            && hasntExpired(state.lastLoginDate, state.userToken.expiresIn),
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
