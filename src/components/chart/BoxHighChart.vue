
<template>
  <HighchartFactory />
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import HighchartFactory from "@/components/HighchartFactory.vue";

@Component({
    components: {
        HighchartFactory,
    },
    props: {
        some: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            some: 'daa',
        };
    },
    mounted() {
        console.log('');
    },
    destroyed() {
        console.log((this as any).some);
    },
})
export default class BoxHighchart extends Vue {

}
</script>

<style scoped>

</style>