import { Vue } from 'vue-class-component';

class Props {
    name: string|undefined;
    color: string|undefined;
    target: string|undefined;
    link: string|undefined;
}

export default class ButtonComponent extends Vue.with(Props) {
    colorButton = this.color;
    nameButton = this.name;
    modalTarget = this.target;
    routerLink = this.link;
}