const state = function () {
    return {
        jwt: undefined
    }
}

const getters = {
    jwt(state) {
        return state.jwt
    }
}

const mutations = {
    setJwt(state, newJwt) {
        state.jwt = newJwt
    }
}

const actions = {
    setJwt(context, newJwt) {
        context.commit('setJwt', newJwt)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}