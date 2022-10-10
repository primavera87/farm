import { Vue } from 'vue-class-component';

class Props {
    title: string|undefined;
    text: string|undefined;
    id: string|undefined;
}

export default class ModalComponent extends Vue.with(Props) {
    modalTitle = this.title;
    modalText = this.text;
    modalId = this.id;
}