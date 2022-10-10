<template>
  <div class="consultation">
    <div class="control-panel">
      <div class="panel-wrapper">
      </div>
      <div class="panel-wrapper">
        <button-component name="Новая концультация" color="btn-success" target="#onCreate" link="consultation/new" />
      </div>
    </div>
    <table-consultation />
  </div>
</template>

<script lang="ts" src="./conclusion.ts"></script>
<style lang="scss" src="./conclusion.scss" />