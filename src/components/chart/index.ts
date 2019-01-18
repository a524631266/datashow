import Ant from "ant-design-vue";
export default {
    install: ( Vue: any ) => {
        Object.defineProperty( Vue.prototype, '$message', { value: Ant.message } );
        Object.defineProperty( Vue.prototype, '$confirm', { value: Ant.modal.confirm } );
        Object.defineProperty( Vue.prototype, '$localStorage', { value: window.localStorage});
        Object.defineProperty( Vue.prototype, '$sessionStorage', { value: window.sessionStorage});
    },
};
