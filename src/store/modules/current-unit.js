const state = function () {
    return {
        currentUnit: '說明頁面'
    }
}

const getters = {
    currentUnit(state) {
        return state.currentUnit
    }
}

const mutations = {
    changeCurrentUnit(state, newTitle) {
        state.currentUnit = newTitle
    }
}

const actions = {
    changeCurrentUnit(context, newTitle) {
        context.commit('changeCurrentUnit', newTitle)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}