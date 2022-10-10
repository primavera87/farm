<template>
  <div class="patients__table">
    <div class="table-responsive">
      <table class="table table-hover fixed">
        <thead>
        <tr>
          <th scope="col" v-for="name in patients[0].head" :key="name">{{ name }}</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="patient in patients[0].body"
            :key="patient.id"
            class="table-row"
        >
          <td>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          </td>
          <td>{{ getFullName(patient) }}</td>
          <td>{{ patient.birthday }}</td>
          <td>{{ patient.sex }}</td>
          <td>{{ getSnils(patient) }}</td>
            <td>
            <div class="buttons-group-settings">
              <router-link :to="{ name: 'consultation', params: { id: patient.id } }">
                <button type="button"
                        v-if="!isConsultation"
                        class="btn btn-success"
                        @click="openConsultation(patient)"
                >
                  <i class="bi bi-eye"></i>
                </button>
              </router-link>
              <router-link :to="{ name: 'patient/edit', params: { id: patient.id } }">
                <button type="button"
                        class="btn btn-warning"
                        @click="editPatient(patient)"
                >
                  <i class="bi bi-gear"></i>
                </button>
              </router-link>
              <button type="button"
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#onDelete"
                      @click="setCurrentPatient(patient)"
              >
                <i class="bi bi-x-square"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <modal-component id="onDelete"
                     title="Удалить"
                     text="Удалить пациента"
                     @onClick="onDelete"
    />
  </div>
</template>

<script lang="ts" src="./table.ts"></script>
<style lang="scss" src="./table.scss" />
