import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PatientView from "../views/patient/patient.vue"
import PatientsView from "../views/patients/patients.vue"
import ConsultationView from "../views/consultation/consultation.vue"
import ConsultationFormView from "../views/consultation/form/form.vue"


import store from "../store";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/patients",
    name: "patients",
    component: PatientsView,
  },
  {
    path: "/patient/:id ",
    name: "patient",
    component: PatientView,
  },
  {
    path: "/patient/edit/:id",
    name: "patient/edit",
    component: PatientView,
  },
  {
    path: "/patient/new",
    name: "patient/new",
    component: PatientView,
  },
  {
    path: "/consultation",
    name: "consultation",
    component: ConsultationView,
  },
  {
    path: "/consultation/edit",
    name: "consultation/edit",
    component: ConsultationFormView,
  },
  {
    path: "/consultation/new",
    name: "consultation/new",
    component: ConsultationFormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
    store.dispatch("initDataPatients");
});

export default router;
