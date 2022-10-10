import { createStore } from "vuex";
import dataPatients from '@/store/data/patients.json'

export default createStore({
  state: {
    patientsData: [
      {
        head: [],
        body: []
      }
    ],
    oldPatientsData: null,
    currentPatient: {},
    currentConsultations: {
      head: [],
      body: []
    },
    currentConsultation: {},
    searchAtValue: 'surname',
    formDataPatient: {
      id: null,
      name: null,
      middleName: null,
      surname: null,
      birthday: null,
      sex: 'М',
      snils: null,
      consultation: []
    },
    formDataConsultation: {
      id: null,
      user_id: null,
      date: null,
      symptoms: null,
    },
  },
  getters: {
    getNewPatient() {
      return JSON.parse(<string>window.localStorage.getItem('newPatient'));
    },

    getCurrentPatient() {
      return JSON.parse(<string>window.localStorage.getItem('currentPatient'));
    },

    getCurrentConsultation() {
      return JSON.parse(<string>window.localStorage.getItem('currentConsultation'));
    },

    getCurrentConsultations() {
      return JSON.parse(<string>window.localStorage.getItem('currentConsultations'));
    },

    getNewConsultation() {
      return JSON.parse(<string>window.localStorage.getItem('newConsultation'));
    }
  },

  mutations: {
    setDataPatients(state, prop) {
      state.patientsData = prop;
    },

    editDataPatients(state, prop) {
      const index = state.patientsData[0].body.findIndex(
        (patient: any) => patient.id === prop.id
      );
      Object.assign(state.patientsData[0].body[index], prop)
    },

    editCurrentConsultation(state, prop) {
      const index = state.currentConsultations.body.findIndex(
        (c: any) => c.id === prop.id
      );
      Object.assign(state.currentConsultations.body[index], prop)
    },

    setOldDataPatients(state, prop) {
      state.oldPatientsData = prop;
    },

    setDataPatientsBody(state, prop) {
      state.patientsData[0].body = prop
    },

    setCurrentPatient(state, prop) {
      state.currentPatient = prop;
      window.localStorage.setItem('currentPatient', JSON.stringify(prop));
    },

    setCurrentConsultations(state, prop) {
      state.currentConsultations = prop;
      window.localStorage.setItem('currentConsultations', JSON.stringify(prop));
    },

    setCurrentConsultation(state, prop) {
      state.currentConsultation = prop;
      window.localStorage.setItem('currentConsultation', JSON.stringify(prop));
    },

    setSearchAtValue(state, prop) {
      state.searchAtValue = prop;
    },

    setNewPatient(state, prop) {
      state.patientsData[0].body = prop;
    }
  },

  actions: {
    initDataPatients(context) {
      context.commit("setDataPatients", dataPatients);
      context.commit("setOldDataPatients", dataPatients[0].body);
    }
  },
  modules: {},
});
