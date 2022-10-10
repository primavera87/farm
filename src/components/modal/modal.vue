<template>
  <div class="modal-panel">
    <div class="modal fade" :id="modalId" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ modalText }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$emit('onClick')">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./modal.ts"></script>
<style lang="scss" src="./modal.scss" />
