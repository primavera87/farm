import { Options, Vue } from 'vue-class-component';
import {mapGetters, mapMutations, mapState} from 'vuex';

import SearchComponent from '@/components/search/search.vue'
import TableComponent from '@/components/table/table.vue'
import ButtonComponent from '@/components/button/button.vue'
import ModalComponent from '@/components/modal/modal.vue'

@Options({
  components: {
    SearchComponent,
    TableComponent,
    ButtonComponent,
    ModalComponent
  },

  data() {
    return {
      form: {},
    }
  },

  computed: {
    ...mapState({
      currentPatient: (state: any) => state.currentPatient,
      formDataConsultation: (state: any) => state.formDataConsultation,
      currentConsultation: (state: any) => state.currentConsultation,
      currentConsultations: (state: any) => state.currentConsultations,
    })
  },

  created() {
    if (this.$route.path === '/consultation/edit') {
      this.form = this.getCurrentConsultation();
    }
  },

  methods: {
    ...mapMutations([
      'setCurrentPatient',
      'setCurrentConsultations',
      'editCurrentConsultation',
    ]),
    ...mapGetters([
      'getCurrentConsultation',
      'getCurrentPatient'
    ]),

    onDelete() {
      this.getCurrentPatient().consultation[0].body =
        this.getCurrentConsultation().filter((a: any) => a.id !== this.getCurrentConsultation().id)
    },

    onSubmit(event: any) {
      event.preventDefault();

      if (this.$route.path === '/consultation/edit') {
        const index = this.currentConsultations.body.findIndex(
          (c: any) => c.id === this.form.id
        );

        this.currentConsultations.body[index] = this.form
        this.setCurrentConsultations(this.currentConsultations)
      } else {
        this.form.id = this.currentConsultation.length + 1;
        this.form.user_id = this.getCurrentPatient().id;
        window.localStorage.setItem('newConsultation', JSON.stringify(this.form));
      }
      this.$router.push("/consultation");
    },

    onReset(event: any) {
      event.preventDefault();

      if (this.$route.path === '/consultation/edit') {
        this.form = this.getCurrentConsultation();
        return;
      }

      this.form = this.formDataConsultation;
    }
  }
})

export default class FormConclusionView extends Vue {}