import { Options, Vue } from 'vue-class-component';
import {mapGetters, mapMutations, mapState} from 'vuex';

import SearchComponent from '@/components/search/search.vue'
import TableComponent from '@/components/table/table.vue'
import ButtonComponent from '@/components/button/button.vue'
import ModalComponent from '@/components/modal/modal.vue'
import TableConsultation from './table/table.vue'

@Options({
  components: {
    SearchComponent,
    TableComponent,
    ButtonComponent,
    ModalComponent,
    TableConsultation,
  },

  computed: {
    ...mapState({
      currentPatient: (state: any) => state.currentPatient,
    })
  },

  created() {
    this.setCurrentPatient(
      JSON.parse(<string>window.localStorage.getItem('currentPatient'))
    )
  },

  methods: {
    ...mapMutations([
      'setCurrentPatient',
      'setCurrentConsultation',
    ]),

    onDelete() {
      const currentConsultation = this.currentPatient.consultation[0].body;
      this.currentPatient.consultation[0].body =
        currentConsultation.filter((a: any) => a.id !== this.currentConsultation.id)
    },
  }
})

export default class ConclusionView extends Vue {}