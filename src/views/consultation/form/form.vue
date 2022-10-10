<template>
  <div class="consultation">
    <div class="panel-wrapper">
      <div class="form-consultation">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
              id="input-birthday"
              label="Дата рождения:"
              label-for="input-birthday"
          >
            <input
                v-model="form.date"
                id="input-birthday"
                name="trip-start"
                type="date"
                class="form-control"
                required
            >
          </b-form-group>
          <b-form-group
              id="textarea-symptoms"
              label="Симптомы"
              label-for="textarea-symptoms"
          >
            <b-form-textarea
                id="textarea-symptoms"
                v-model="form.symptoms"
                rows="3"
                no-resize
            ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger" class="m-lg-1">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./form.ts"></script>
