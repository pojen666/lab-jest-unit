import {mount, createLocalVue} from '@vue/test-utils'
import VueRouter from 'vue-router'
import router from '@/router/index';
import Vuex from 'vuex'
import App from "@/App";
import ModalView from "@/views/ModalView";
import currentUnit from "@/store/modules/current-unit";
import Home from "@/views/Home";

describe('router', () => {

    it('test routing by router', async () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        localVue.use(Vuex)

        const store = new Vuex.Store({
            modules: {
                currentUnit
            }
        })
        const wrapper = mount(App, { localVue, router, store });
        expect(wrapper.findComponent(ModalView).exists()).toBe(false);
        expect(wrapper.findComponent(Home).exists()).toBe(true);

        await router.push('/modal');
        expect(wrapper.findComponent(ModalView).exists()).toBe(true);
        expect(wrapper.findComponent(Home).exists()).toBe(false);

        await router.push('/');
        expect(wrapper.findComponent(ModalView).exists()).toBe(false);
        expect(wrapper.findComponent(Home).exists()).toBe(true);
    })
})