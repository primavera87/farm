<template>
  <div class="patient">
    <div class="panel-wrapper">
      <div class="form-patient">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
              id="input-group-1"
              label="Фамилия:"
              label-for="input-1"
          >
            <b-form-input
                v-model="form.surname"
                id="input-1"
                type="text"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-2"
              label="Имя:"
              label-for="input-2"
          >
            <b-form-input
                v-model="form.name"
                id="input-2"
                type="text"
                required
            ></b-form-input>
          </b-form-group>
          <b-form-group
              id="input-group-3"
              label="Отчество:"
              label-for="input-3"
          >
            <b-form-input
                v-model="form.middleName"
                id="input-3"
                type="text"
                required
            ></b-form-input>
          </b-form-group>
          <b-form-group
              id="input-group-4"
              label="СНИЛС:"
              label-for="input-4"
          >
            <b-form-input
                v-model="form.snils"
                id="input-4"
                type="text"
                required
            ></b-form-input>
            {{ validForm.snils }}
          </b-form-group>
          <b-form-group
              id="input-group-5"
              label="Дата рождения:"
              label-for="input-5"
          >
            <input
                v-model="form.birthday"
                id="input-5"
                name="trip-start"
                type="date"
                class="form-control"
                required
            >
          </b-form-group>
          <b-form-group label="Пол" v-slot="{ ariaDescribedby }">
            <b-form-radio
                v-model="form.sex"
                :aria-describedby="ariaDescribedby"
                name="М"
                value="М"
            >
              М
            </b-form-radio>
            <b-form-radio
                v-model="form.sex"
                :aria-describedby="ariaDescribedby"
                name="Ж"
                value="Ж"
            >
              Ж
            </b-form-radio>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger" class="m-lg-1">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./patient.ts"></script>

<style lang="scss" src="./patient.scss" />
