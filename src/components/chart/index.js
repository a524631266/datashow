import Ant from "ant-design-vue";
export default {
    install: (Vue) => {
        Object.defineProperty(Vue.prototype, '$message', { value: Ant.message });
    },
};
//# sourceMappingURL=index.js.map