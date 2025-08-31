<template>
  <div class="loading-overlay">
    <div
      class="spinner-border text-primary"
      role="status"
      style="width: 80px; height: 80px; border-width: 0.5rem"
    >
      <span class="visually-hidden">Carregando...</span>
    </div>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
</style>
