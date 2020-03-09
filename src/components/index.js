import Vue from "vue";

import Icon from "./Icon/Icon.vue";

const Components = {
    Icon
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;

