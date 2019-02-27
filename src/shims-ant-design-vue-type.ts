import Vue from 'vue';
import { Message } from "ant-design-vue/types/message";
import { ModalOptions ,ModalConfirm } from "ant-design-vue/types/modal";
declare module 'vue/types/vue' {
  interface Vue {
    $message: Message;
    $confirm: (modalOptios: ModalOptions) => ModalConfirm;
  }
}
