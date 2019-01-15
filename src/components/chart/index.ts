import Ant from "ant-design-vue";
export default {
    install: ( Vue: any ) => {
        Object.defineProperty( Vue.prototype, '$message', { value: Ant.message } );
        Object.defineProperty( Vue.prototype, '$confirm', { value: Ant.modal.confirm } );
    },
};
