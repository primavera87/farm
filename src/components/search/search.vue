<template>
  <div class="search-panel">
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search..." @input="search">
    <select class="form-select" aria-label="Default select example" @change="searchAt">
      <option value="surname">ФИО</option>
      <option value="snils">СНИЛС</option>
    </select>
  </div>
</template>

<script lang="ts" src="./search.ts"></script>
<style lang="scss" src="./search.scss" />