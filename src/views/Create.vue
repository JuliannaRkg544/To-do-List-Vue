<template>
  <Header/>
 
    <div class="container mt-3 flex mb-3 " style="max-width: 600px;" >
         
          <input type="text" class="form-label task-title" style="border: none;" id="email" v-model="taskLocal.title" placeholder="Título">
          <textarea class="form-control"  placeholder="Descrição" id="descricao" v-model="taskLocal.description" rows="3" ></textarea>
          <div class="btn-box mt-1" >
          <div class="btn btn-primary" style="background-color:#8fc549; font-weight: 600; border: none; margin-right: 5px;" @click="createTask" > Salvar </div>
          <RouterLink to="/">
          <div  class="btn" style="background-color:#fff;  border: none; font-weight: 600; color: #8fc549; " > Cancelar </div>
          </RouterLink>
          </div>
          <ModalError v-show="habilitaModalErro" @close="closeModal" :refError="errorCreate" />
    </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import {reactive, ref } from 'vue';
import axios from 'axios';
//@ts-ignore
import ModalWarn from '../utils/ModalWarn.vue';
//@ts-ignore
import ModalError from '../utils/ModalError.vue';

const API_URL =  import.meta.env.VITE_API_URL;

const router = useRouter()
let habilitaModalErro = ref(false)
let errorCreate = reactive([""])

let taskLocal = reactive({
  title: '',
  description: ''
})


function closeModal(){
  habilitaModalErro.value = false
  errorCreate = [""]
}
function createTask(){

  axios.post(`${API_URL}/create-task`, taskLocal)
  .then(()=>   router.push('/'))
  .catch((error)=>{  habilitaModalErro.value=true;
    if (error.response.data.errors){
      const errors = error.response.data.errors;
      Object.values(errors).forEach((msgs: any) => {
      //@ts-ignore
       msgs.forEach(msg => {
        errorCreate.push(msg);
        });
     })
    }
    
    })

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