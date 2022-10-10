import { Options, Vue } from 'vue-class-component';
import { Patient } from '@/abstracts/patient'
import {mapState, mapMutations, mapGetters} from 'vuex'

import ModalComponent from '@/components/modal/modal.vue'

@Options({
  components: {
    ModalComponent
  },

  computed: {
    ...mapState({
      patients: (state: any) => state.patientsData,
      currentPatient: (state: any) => state.currentPatient,
    })
  },

  methods: {
    ...mapMutations([
      'setDataPatientsBody',
      'setCurrentPatient',
      'setCurrentConsultation',
      'setCurrentConsultations'
    ]),
    ...mapGetters([
      'getCurrentPatient'
    ]),

    getFullName(patient: Patient) {
      return patient.surname + ' ' + patient.name + ' ' + patient.middleName;
    },

    getSnils(patient: Patient) {
      if (patient.snils.length == 11) {
        return patient.snils.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1-$2-$3 $4");
      }
    },

    onDelete() {
      this.setDataPatientsBody(
        this.patients[0].body.filter((a: any) => a.id !== this.getCurrentPatient().id)
      );
    },

    editPatient(patient: Patient) {
      window.localStorage.setItem('editPatient', JSON.stringify(patient));
    },

    openConsultation(patient: any) {
      this.setCurrentConsultations(patient.consultation[0]);
      this.editPatient(patient)
      this.setCurrentPatient(patient)
      this.setCurrentPatient(patient)
    }
  },
})

export default class PatientView extends Vue {}