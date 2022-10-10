<template>
  <div class="patients">
    <div class="control-panel">
      <div class="panel-wrapper">
        <search-component />
      </div>
      <div class="panel-wrapper">
        <button-component name="Новый Пациент" color="btn-success" target="#onCreate" link="patient/new" />
      </div>
    </div>
    <div class="table-panel">
      <div class="panel-wrapper">
        <table-component />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./patients.ts"></script>
<style lang="scss" src="./patients.scss" />
