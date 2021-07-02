import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import currentUnit from "@/store/modules/current-unit";
import Jwt from "@/views/Jwt";
import jwt from "@/store/modules/jwt";
import VueAxios from "vue-axios";
import axios from "axios";

jest.mock('axios', () => ({
    get: jest.fn()
}))

describe('Jwt.Vue', () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)
    localVue.use(VueAxios, axios)
    const store = new Vuex.Store({
        modules: {
            currentUnit,
            jwt
        }
    })

    it('測試是否能使用axios取得jwt並放置在store', async () => {
        const expectJwt = 'Bearer header.payload.signature'
        localVue.axios.get.mockImplementationOnce(() => Promise.resolve({data: expectJwt}))
        const wrapper = shallowMount(Jwt, {localVue, store})
        const vm = wrapper.vm;
        expect(Object.keys(vm.$options.methods).length).toBe(1)
        wrapper.get('button').trigger('click')
        await localVue.nextTick()
        expect(store.getters.jwt).toBe(expectJwt)
        await localVue.nextTick()
        expect(vm.$data['jwt']).toBe(expectJwt)
        expect(wrapper.find('span').text()).toBe(expectJwt)

    });
})