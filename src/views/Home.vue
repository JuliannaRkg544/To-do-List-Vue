<script setup lang="ts">
import axios from 'axios';
import Header from '../components/Header.vue';
import { onBeforeMount, reactive, ref, type Reactive, type Ref } from 'vue';
//@ts-ignore
import ModalError from '../utils/ModalError.vue'
//@ts-ignore
import ModalWarn from '../utils/ModalWarn.vue';

const API_URL =  import.meta.env.VITE_API_URL;
let taskIdDelete:string = ""
let errorMessage = reactive([""])
let habilitaModalDelete: Ref<boolean> = ref(false)
let habilitaModalErro: Ref<boolean> = ref(false)

let tasks: Reactive<{id:string; title:string; is_done:boolean; description:string}[]> = reactive([])

 onBeforeMount(() => { axios.get(`${API_URL}/get-all-tasks`)
  .then((res)=>{
  Object.assign(tasks, res.data)
  console.log()
 })
 .catch((error=>{
  console.error(error.response?.data || error.message)
  errorMessage.push(error.message)
  habilitaModalErro.value = true
 }))
})


 function removeTaskDeletedFromTasks(){
  axios.delete(`${API_URL}/delete-task/${taskIdDelete}`)
  .then((res)=> {
    tasks = tasks.filter(task => task.id !== taskIdDelete);
    habilitaModalDelete.value = false
  })
  .catch((error=>{
   console.error(error.response?.data || error.message)
  errorMessage = error.message;
  habilitaModalErro.value = true
 }))
}
 
function modalDelete(id:string){
  taskIdDelete = id
  habilitaModalDelete.value = true

}

function markTask(id:string, isDone:boolean){
  axios.patch(`${API_URL}/update-task-done/${id}`, {is_done:!isDone})
       .then(()=> {const task = tasks.find(t => t.id === id)
                    if (task) task.is_done = !isDone })
}

function closeModal(){
  habilitaModalDelete.value = false
  habilitaModalErro.value = false
  errorMessage = [""]
}

</script>



<template>
  <Header />
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-5 text-center">       
        <RouterLink to="/task-create">
          <button type="button" class="btn btn-primary btn-home">+</button>
        </RouterLink>
        <p v-if="tasks.length === 0" class="h5 mb-3">Adicione uma tarefa</p>
        <div v-else>
          <div
            class="task "
            v-for="task in tasks"
            :key="task.id"
            :class="{'task-done':task.is_done}"           
          >
            <RouterLink :to="`/task-update/${task.id}`">
              <span>{{ task.title }}</span>
            </RouterLink>

            <div class="trash-container d-flex justify-content-center align-items-center">
              <ion-icon v-if="task.is_done" name="checkbox" @click = "markTask(task.id,task.is_done)" ></ion-icon>
              <ion-icon v-else name="checkbox-outline" @click = "markTask(task.id, task.is_done)" ></ion-icon>
              <ion-icon name="trash-outline"  @click="modalDelete(task.id)"></ion-icon>
            </div>
          </div>
        </div>

      </div>
    </div>
    <ModalWarn v-show="habilitaModalDelete" @close="closeModal" @delete="removeTaskDeletedFromTasks" />
    <ModalError v-if="habilitaModalErro" @close="closeModal" :ref="errorMessage" />
 </div>

</template>

<style>
ion-icon {
  font-size: 22px;
  padding: 3px;
}
.container-home{
  background-color: #f2f2f2;
    min-height: calc(100vh - 68px);
  width: 100%;
  p{
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 22px;

  }
}
.btn-home {
  border-radius: 50%;
  background-color: #8FC549;
  border:none;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}
.btn-home:hover{
    background-color: #d2e9b4;
}

.btn-home:active {
  background-color: #7a837a !important;
}
.task-done, .task-done>p{
   border: 1px solid rgb(240, 100, 100) !important;
    background-color: #e9e9e9 !important;
}
.task{
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
.task a {
  text-decoration: none;
  color: #000;
}
.trash-container{
 height: 40px;
  cursor: pointer;
}
</style>