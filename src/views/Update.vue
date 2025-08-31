<template>
  <Header />

  <div class="container mt-3 flex mb-3" style="max-width: 600px">
    <input
      type="text"
      class="form-label task-title"
      style="border: none"
      id="email"
      v-model="taskLocal.title"
    />
    <textarea
      class="form-control"
      id="descricao"
      v-model="taskLocal.description"
      rows="3"
    ></textarea>
    <div class="btn-box mt-1">
      <div
        class="btn btn-primary"
        style="
          background-color: #8fc549;
          font-weight: 600;
          border: none;
          margin-right: 5px;
        "
        @click="updateTask"
      >
        Salvar
      </div>
      <RouterLink :to="'/' + group_id" >
        <div
          class="btn"
          style="
            background-color: #fff;
            border: none;
            font-weight: 600;
            color: #8fc549;
          "
        >
          Cancelar
        </div>
      </RouterLink>
    </div>
    <ModalError 
      v-if="habilitaModalErro"
      @close="closeModal"
      :refError="errorMessage"
    />
    <Loading v-show="habilitaLoading" />
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
import Loading from "../utils/Loading.vue";
import Header from "../components/Header.vue";
import { onBeforeMount, reactive, ref } from "vue";

import axios from "axios";
import ModalError from "../utils/ModalError.vue";
const route = useRoute();
const router = useRouter();
let habilitaModalErro = ref(false)
let habilitaLoading = ref(false)
let errorMessage = reactive([""])
const taskid = route.params.id;
const API_URL = import.meta.env.VITE_API_URL;
let group_id:string = ""
let taskLocal = reactive({
  title: "",
  description: "",
});

onBeforeMount(() => {
  habilitaLoading.value = true
  axios
    .get(`${API_URL}/get-task-byId/${taskid}`)
    .then((res) => {
      Object.assign(taskLocal, res.data);
      group_id = res.data.group_id
      habilitaLoading.value = false
    })
    .catch((error) => {
      habilitaLoading.value = false
      console.error(error.response?.data || error.message);
    });
});

function updateTask() {
  
  const body = {
    title: taskLocal.title,
    description: taskLocal.description,
  };
  axios
    .patch(`${API_URL}/update-task/${taskid}`, body)
    .then(() => router.push(`/${group_id}`))
    .catch((err)=> {habilitaModalErro.value = true ; 
       if (err.response.data.errors) {
        const errors = err.response.data.errors;
        Object.values(errors).forEach((msgs: any) => {
          //@ts-ignore
          msgs.forEach((msg) => {
            errorMessage.push(msg);
          });
        });
      }} )
}

function closeModal() {
  habilitaModalErro.value = false;
  errorMessage = [""];
}
</script>

<style>
.task-title {
  font-weight: 600;
}

.btn-box {
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
}
</style>
