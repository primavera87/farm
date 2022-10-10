import { Options, Vue } from 'vue-class-component';
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

import SearchComponent from '@/components/search/search.vue'
import TableComponent from '@/components/table/table.vue'
import ButtonComponent from '@/components/button/button.vue'
import {Patient} from "@/abstracts/patient";

@Options({
  components: {
    SearchComponent,
    TableComponent,
    ButtonComponent
  },

  computed: {
    ...mapState({
      patients: (state: any) => state.patientsData,
      currentPatient: (state: any) => state.currentPatient,
      oldPatients: (state: any) => state.oldPatientsData,
    }),
  },

  methods: {
    ...mapMutations([
      'initDataPatients',
      'setDataPatientsBody'
    ]),
    ...mapGetters([
      'getNewPatient',
      'getCurrentPatient'
    ]),
    ...mapActions([
      'initDataPatients'
    ]),
  },

  mounted() {
    const index = this.patients[0].body.findIndex(
      (p: any) => p.id === this.getNewPatient().id
    );

    if (index === -1) {
      if (window.localStorage.getItem('newPatient')) {
        const newPatient = this.getNewPatient();
        this.patients[0].body.push(newPatient);
      }
    }
  },

})

export default class PatientsView extends Vue {}