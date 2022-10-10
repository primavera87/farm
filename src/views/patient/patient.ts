import { Options, Vue } from 'vue-class-component';
import {mapActions, mapMutations, mapState} from 'vuex';

import SearchComponent from '@/components/search/search.vue'
import TableComponent from '@/components/table/table.vue'
import ButtonComponent from '@/components/button/button.vue'

@Options({
  components: {
    SearchComponent,
    TableComponent,
    ButtonComponent
  },

  data() {
    return {
      form: {},
      validForm: {
        snils: ''
      }
    }
  },

  computed: {
    ...mapState({
      patients: (state: any) => state.patientsData,
      oldPatients: (state: any) => state.oldPatientsData,
      currentPatient: (state: any) => state.currentPatient,
      formDataPatient: (state: any) => state.formDataPatient,
    }),

    isConsultation() {
      return this.$route.path === '/consultation';
    },
  },

  mounted() {
    this.getPatientOnLocalStorage();
  },

  methods: {
    ...mapMutations([
      'initDataPatients',
      'setDataPatientsBody',
      'setNewPatient',
      'editDataPatients'
    ]),
    ...mapActions([
      'initDataPatients'
    ]),

    getPatientOnLocalStorage() {
      if (this.$route.name === 'patient/edit') {
        if (window.localStorage.getItem('editPatient')) {
          this.form = JSON.parse(<string>window.localStorage.getItem('editPatient'));
        }
      }
    },

    onSubmit(event: any) {
      event.preventDefault();

      if (!/^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[ ]?([0-9]{2})$/.test(this.form.snils)) {
         return this.validForm.snils = 'Неверно заполнен СНИЛС';
      }

      if (this.$route.name === 'patient/edit') {
         this.editDataPatients(this.form)
      } else {
        this.form.id = this.patients[0].body.length + 1;
        window.localStorage.setItem('newPatient', JSON.stringify(this.form));
      }

      this.$router.push("/patients");
    },

    onReset(event: any) {
      event.preventDefault();

      if (this.$route.name === 'patient/edit') {
        this.getPatientOnLocalStorage();
        return;
      }

      this.form = this.formDataPatient;
    }
  }
})

export default class PatientView extends Vue {
}