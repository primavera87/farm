<template>
  <div class="panel-wrapper">
    <div class="patients__table">
      <div class="table-responsive">
        <table class="table table-hover fixed" v-if="currentConsultations.head.length !== 0">
          <thead>
          <tr>
            <th scope="col" v-for="name in currentConsultations.head" :key="name">{{ name }}</th>
          </tr>
          </thead>
          <tbody>
          <tr
                v-for="consultation in currentConsultations.body"
              :key="consultation.id"
              class="table-row"
          >
            <td>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            </td>
            <td>{{ consultation.date }}</td>
            <td>{{ consultation.time }}</td>
            <td>{{ consultation.symptoms }}</td>
            <td>
              <div class="buttons-group-settings">
                <router-link :to="{ name: 'consultation/edit', params: { id: consultation.id } }">
                  <button type="button"
                          class="btn btn-warning"
                          @click="setCurrentConsultation(consultation)"
                  >
                    <i class="bi bi-gear"></i>
                  </button>
                </router-link>
                <button type="button"
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#onDeleteConsultation"
                        @click="setCurrentConsultation(consultation)"
                >
                  <i class="bi bi-x-square"></i>
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <span v-else>Концультаций нет</span>
      </div>
      <modal-component id="onDeleteConsultation"
                       title="Удалить"
                       text="Удалить концультацию"
                       @onClick="onDelete"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./table.ts"></script>