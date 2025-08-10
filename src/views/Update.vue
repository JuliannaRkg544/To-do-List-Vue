<template>
  <Header/>
 
    <div class="container mt-3 flex mb-3 " style="max-width: 600px;" >
          <input type="text" class="form-label task-title" style="border: none;" id="email" v-model="taskLocal.title">
          <textarea class="form-control" id="descricao" v-model="taskLocal.description" rows="3" ></textarea>
          <div class="btn-box mt-1" >
          <div class="btn btn-primary" style="background-color:#8fc549; font-weight: 600; border: none; margin-right: 5px;" @click="updateTask"> Salvar </div>
          <RouterLink to="/">
          <div  class="btn" style="background-color:#fff;  border: none; font-weight: 600; color: #8fc549; " > Cancelar </div>
          </RouterLink>
          </div>
    </div>
</template>
<script setup lang="ts" >
import { RouterLink, useRoute, useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import { onMounted, reactive } from 'vue';

import axios from 'axios';
const route = useRoute()
const router = useRouter()
const taskid = route.params.id
const API_URL =  import.meta.env.VITE_API_URL;
let taskLocal = reactive({
  title: '',
  description: ''
})

onMounted(()=>{
  axios.get(`${API_URL}/get-task-byId/${taskid}`)
  .then((res)=>{
    Object.assign(taskLocal,res.data)
  })
  .catch((error=>{
  console.error(error.response?.data || error.message)
 }))
})

function updateTask(){
  const body = {
    title:taskLocal.title,
    description: taskLocal.description
  }
  axios.patch(`${API_URL}/update-task/${taskid}`, body)
  .then(()=> router.push("/"))
}
 
</script>
<style>


.task-title{
  font-weight: 600;
}

.btn-box{
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;

}
</style>