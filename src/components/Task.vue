<script setup >
import axios from 'axios';
import Update from '../views/Update.vue';
import { ref } from 'vue';
import { defineProps, defineEmits  } from 'vue';
import { RouterLink } from 'vue-router';
const API_URL =  import.meta.env.VITE_API_URL;

const emit = defineEmits(['task-deleted','eventoPersonalizado'])
let isTaskFechada = ref(true);
const { data } = defineProps({
  data: {
    type: Object,
    required: true
  }
});

 function deleteTask(id){
  axios.delete(`${API_URL}/delete-task/${id}`)
  .then((res)=>  emit('task-deleted', id))
  .catch((error=>{
  console.error(error.response?.data || error.message)
 }))
}

function handleTask(){
  isTaskFechada = !isTaskFechada
  console.log(isTaskFechada)
 // emit('eventoPersonalizado')
}

</script>

<template>
   
    <div v-if = "isTaskFechada" class="task" @click="()=>{isTaskFechada=!isTaskFechada; emit('eventoPersonalizado')}">
        <span>{{data.title}} {{ isTaskFechada }}</span>
        <div class="trash-container d-flex justify-content-center align-items-center"  >
          <img  src="../assets/trash-icon.png"  @click="deleteTask(data.id) " />

        </div>
    </div>
     <Update v-else :data="data"  />
 
</template>

<style>
.task{
  background-color: #fff;
  border: 1px solid #eee;         /* Corrigido: adicionado 'solid' */
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  width: 520px;
  height: 60px;
  transition: background-color 0.3s ease;

  display: flex !important;      /* Use com moderação o '!important' */
  justify-content: space-between;
  align-items: center;
  
}

.task:hover {
  background-color: #e9e9e9 !important; /* Azul mais escuro no clique */
}
.task-item {
  
    

}
.trash-container{
 width: 40px;
 height: 40px;

}
</style>