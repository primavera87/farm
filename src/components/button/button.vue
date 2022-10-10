<template>
  <div class="buttons-panel">
    <router-link :to="routerLink">
      <button type="button"
              class="btn w-100"
              :class="colorButton"
      >
        {{ nameButton }}
      </button>
    </router-link>
  </div>
</template>

<script lang="ts" src="./buttons.ts"></script>
<style lang="scss" src="./button.scss" />
