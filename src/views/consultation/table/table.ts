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

  computed: {
    ...mapState({
      currentPatient: (state: any) => state.currentPatient,
      currentConsultation: (state: any) => state.currentConsultation,
      currentConsultations: (state: any) => state.currentConsultations,
    })
  },

  created() {
    if (this.currentConsultations) {
      this.setCurrentConsultations(this.getCurrentConsultations());
    }
    this.getConsultationOnLocalStorage();
  },

  methods: {
    ...mapMutations([
      'setCurrentPatient',
      'setCurrentConsultations',
      'setCurrentConsultation',
    ]),
    ...mapGetters([
      'getNewConsultation',
      'getCurrentConsultation',
      'getCurrentConsultations'
    ]),

    getConsultationOnLocalStorage() {
      const index = this.currentConsultations.body.findIndex(
        (c: any) => c.id === this.getNewConsultation().id
      );

      if (index === -1) {
        if (window.localStorage.getItem('newConsultation')) {
          if (this.getNewConsultation().user_id === this.currentPatient.id) {
            this.currentConsultations.body.push(this.getNewConsultation());
          }
        }
      }
    },

    onDelete() {
      this.currentConsultations.body =
        this.currentConsultations.body.filter((c: any) => c.id !== this.currentConsultation.id)
    },
  }
})

export default class TableConclusionView extends Vue {}