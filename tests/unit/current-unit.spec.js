import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import currentUnit from '@/store/modules/current-unit'

describe('current-unit.js', () => {
    let localVue
    let store

    beforeEach(() => {
        localVue = createLocalVue()
        localVue.use(Vuex)
        store = new Vuex.Store({
            modules: {
                currentUnit
            }
        })
    })

    it('測試getters效果符合預期', () => {
        expect(store.getters.currentUnit).toBe('說明頁面')
    })

    it('測試mutations效果符合預期', () => {
        expect(store.getters.currentUnit).toBe('說明頁面')
        store.commit('changeCurrentUnit', 'test commit')
        expect(store.getters.currentUnit).toBe('test commit')
    })

    it('測試actions效果符合預期', () => {
        expect(store.getters.currentUnit).toBe('說明頁面')
        store.dispatch('changeCurrentUnit', 'test dispatch')
        expect(store.getters.currentUnit).toBe('test dispatch')
    })
})