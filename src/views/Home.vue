<script setup lang="ts">
import Header from '../components/Header.vue';
import Task from '../components/Task.vue';

</script>



<template>
   <Header/>
    <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center">
     
        <p class="h5 mb-3">Adicione uma tarefa</p>

        <button type="button" class="btn btn-primary btn-home">
          +
        </button>
      </div>
    </div>
  </div>
</template>
<style>
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
}
.btn-home:hover{
    background-color: #d2e9b4;
}

.btn-home:active {
  background-color: #7a837a !important; /* Azul mais escuro no clique */
}
</style>