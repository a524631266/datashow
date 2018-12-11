<template>
    <div class="upper" v-show="show">
        <button>点击</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
    props: {
        show: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            some: "daa",
        };
    },
    mounted() {
        console.log("");
    },
    destroyed() {
        console.log((this as any).some);
    },
})
export default class LittleBar extends Vue {
    // @Prop() private show!: Boolean;
}
</script>

<style scoped>
.upper {
    position: absolute;
    top: 0%;
    height: 20px;
}
</style>

