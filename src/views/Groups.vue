<template>
    <Header/>
     <div class="d-grid mt-2 m-2">
      <button
        class="btn btn-primary"
        type="button"
        style="background-color: #8fc549; border-color: #8fc549"
        @click="criarGrupo"
      >
        Criar
      </button>
    </div>
<div class="container">
    <div class="row justify-content-between mt-3" >
        
            <div class="group m-2 d-flex align-items-center justify-content-center "
            @click="criarTarefa(group.id)"
             v-for="group in grupos" >
              {{ group.name }}
            </div>
    </div>
 </div>
</template>

<script setup lang="ts" >
import axios from 'axios';
import Header from '../components/Header.vue';
import { onMounted, reactive, type Reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const API_URL = import.meta.env.VITE_API_URL;
const grupos:Reactive<{name:string, id:string, group_id:string}>[] = reactive([])
const group_id = route.params.id
onMounted(()=>{
  axios.get(`${API_URL}/get-all-groups`)
        .then((res)=>{
        console.log(res.data)
        Object.assign(grupos,res.data)
})
}) 
function criarGrupo(){
   router.push(`/group-create`);
}
function criarTarefa(id:string){
  router.push(`/${id}`);
}
</script>
<style>
.group{
    
    width: 300px;
    height: 100px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
     border: 1px solid #ddd;
     cursor: pointer;
     transition: transform 0.15s ease, box-shadow 0.15s ease; 

}
.group:hover {
  transform: scale(1.02); /* cresce levemente no hover */
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}
</style>