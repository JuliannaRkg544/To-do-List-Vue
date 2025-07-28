<template>

    <div class="task">
        <span>Título</span>
        <img/>
    </div>
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
</style>