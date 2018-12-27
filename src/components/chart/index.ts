import Ant from "ant-design-vue";
export default {
    install: ( Vue: any ) => {
        Object.defineProperty( Vue.prototype, '$message', { value: Ant.message } );
    },
};
