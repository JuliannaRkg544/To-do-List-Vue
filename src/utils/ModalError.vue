<template>
  <div id="modal-error" class="container-modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" style="width: 100%">Erro</h5>
          <button
            style="display: flex; justify-content: end"
            type="button"
            @click="emit('close')"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" v-for="erro in props.refError">
          {{ erro }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="emit('close')"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);

const props = defineProps({
  refError: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<style>
.container-modal {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

#modal-error .modal-content .modal-title {
  color: #ff1818e5;
}
</style>
