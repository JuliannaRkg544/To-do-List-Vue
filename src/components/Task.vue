<script setup lang="ts">
//@ts-ignore
import Update from "../views/Update.vue";
import { reactive, ref } from "vue";
import { defineProps, defineEmits } from "vue";
import type { Ref } from "vue";
//@ts-ignore
import ModalError from "../utils/ModalError.vue";

const emit = defineEmits(["task-deleted", "eventoPersonalizado"]);
let isTaskFechada: Ref<boolean> = ref(true);
let errorMessage = reactive([""]);
let habilitaModalErro: Ref<boolean> = ref(false);

const { data } = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

function closeModal() {
  habilitaModalErro.value = false;
}
</script>

<template>
  <div
    v-if="isTaskFechada"
    class="task"
    @click="
      () => {
        isTaskFechada = !isTaskFechada;
        emit('eventoPersonalizado');
      }
    "
  >
    <span>{{ data.title }} {{ isTaskFechada }}</span>
  </div>
  <Update v-else :data="data" />
  <ModalError
    v-show="habilitaModalErro"
    @close="closeModal"
    :refError="errorMessage"
  />
</template>

<style>
.task {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  width: 520px;
  height: 60px;
  transition: background-color 0.3s ease;

  display: flex !important;
  justify-content: space-between;
  align-items: center;
}

.task:hover {
  background-color: #e9e9e9 !important;
}

.trash-container {
  width: 40px;
  height: 40px;
}
</style>
