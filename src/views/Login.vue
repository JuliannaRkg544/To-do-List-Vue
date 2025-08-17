<template>
  <div class="container py-4 box">
    <div
      style="width: 100%; display: flex; justify-content: center"
      class="py-3"
    >
      <img src="../assets/Group 8.svg" alt="logo" />
    </div>
    <div class="input-group flex-nowrap mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Email"
        aria-label="Username"
      />
    </div>
    <div class="input-group flex-nowrap mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="Senha"
        aria-label="Password"
      />
    </div>
    <div class="d-grid gap-2">
      <button
        class="btn btn-primary"
        type="button"
        style="background-color: #8fc549; border-color: #8fc549"
      >
        Entrar
      </button>
    </div>
    <div
      style="width: 100%; display: flex; justify-content: center"
      class="py-3"
    >
      <RouterLink to="/signin"> Não tem uma conta? Cadastre-se! </RouterLink>
    </div>
  </div>
</template>

<style>
.box {
  min-width: 540px;
  max-width: 540px;
}
</style>
