import Vue from "vue";
import Vuex from "vuex";
import Layout from "./modules/LayoutStore";
import Menu from "./modules/MenuStore";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        Layout,
        Menu
    },
    strict: debug,
    plugins: []
})