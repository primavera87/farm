<template>
  <div>Consultation</div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import dataPatients from '@/store/data/patients.json'

@Options({
  components: {

  }
})
export default class Patient extends Vue {
  patients = dataPatients

  mounted() {
      console.log(this.patients);

  }

  close() {
    return true;
  }

}
</script>
