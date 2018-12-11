<template>
    <div :class="positionClass">
        {{msg}}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PositionClass } from '../types/index';

@Component({
        props: {
            url: {
                type: String,
                required: true,
            },
            positionClass: {
                type: Object,
                required: true,
            },
            option: Object,
        },
        data() {
            return {
                msg: "",
            };
        },
        mounted() {
            (this as any).intervalid = setInterval(() => {
                console.log(this.$props.positionClass);
            }, 1000);
        },
        destroyed() {
            console.log("destory (this as any).intervalid", (this as any).intervalid);
            clearInterval((this as any).intervalid);
        },
})
export default class EchartFactory extends Vue {}
</script>


<style scoped>

</style>
