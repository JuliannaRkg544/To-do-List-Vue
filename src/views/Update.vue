<template>
  <Header/>
 
    <div class="container mt-3 flex mb-3 " style="max-width: 600px;" >
          <label for="descricao" class="form-label task-title ms-2">{{ taskLocal.title }}</label>
          <textarea class="form-control" id="descricao" v-model="taskLocal.description" rows="3" ></textarea>
          <div class="btn-box mt-1" >
          <div class="btn btn-primary" style="background-color:#8fc549; font-weight: 600; border: none; margin-right: 5px;" @click="updateTask"> Salvar </div>
          <RouterLink to="/">
          <div  class="btn" style="background-color:#fff;  border: none; font-weight: 600; color: #8fc549; " > Cancelar </div>
          </RouterLink>
          </div>
    </div>
</template>
<script setup>
import { RouterLink, useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import { computed, defineProps, onMounted, reactive, watch } from 'vue';
import axios from 'axios';
const route = useRoute()
const taskid = route.params.id
const API_URL =  import.meta.env.VITE_API_URL;
let taskLocal = reactive({
  title: '',
  description: ''
})
onMounted(()=>{
  axios.get(`${API_URL}/get-task-byId/${taskid}`)
  .then((res)=>{
    console.log(res.data)
    Object.assign(taskLocal,res.data)
    console.log(taskLocal)
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