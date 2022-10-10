import { Options, Vue } from 'vue-class-component';
import { mapActions, mapMutations, mapState } from "vuex";

@Options({
  computed: {
    ...mapState({
      oldPatients: (state: any) => state.oldPatientsData,
      searchAtValue: (state: any) => state.searchAtValue
    }),
  },

  methods: {
    ...mapMutations([
      'initDataPatients',
      'setDataPatientsBody',
      'setSearchAtValue',
    ]),

    ...mapActions([
      'initDataPatients'
    ]),

    search(value: any) {
      this.setDataPatientsBody(
        this.oldPatients.filter((a: any) =>
          a[this.searchAtValue].toLowerCase().startsWith(value.target.value.toLowerCase()))
      );
    },

    searchAt(value: any) {
      this.setSearchAtValue(value.target.value)
    }
  }
})

export default class SearchComponent extends Vue {
  search!: () => Promise<void>
  searchAt!: () => Promise<void>
}