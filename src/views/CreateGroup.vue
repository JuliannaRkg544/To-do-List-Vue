<template>
<Header/>
<div class="container d-flex align-items-center justify-content-center mt-4" >
    <div class=" group-create d-flex" >
        <label>Gupo de Tarefa</label>
        <input type="text" v-model="groupName" placeholder="Digite o nome do grupo" ></input>
         <div class="btn-box mt-1">
      <div
        class="btn btn-primary"
        style="
          background-color: #8fc549;
          font-weight: 600;
          border: none;
          margin-right: 5px;
        "
        @click="createGroup"
      >
        Salvar
      </div>
      <RouterLink to="/groups">
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
    </div>
    

</div>
</template>
<script setup lang="ts" >
import axios from 'axios';
import Header from '../components/Header.vue';
import { useRouter } from 'vue-router';
import { ref, type Ref } from 'vue';
const API_URL = import.meta.env.VITE_API_URL;
const router = useRouter();
let groupName:Ref<String> = ref("");
function createGroup(){
    axios.post(`${API_URL}/create-group`, {name:groupName.value})
    .then(()=>{
        router.push('/groups')
    })
}
</script>
<style>
.group-create{
    flex-direction: column;
}
</style>
