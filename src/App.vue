<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      
      <img src="https://cdn2.iconfinder.com/data/icons/miscellaneous-31/60/android-brain-256.png" width="150" class="mr-3">
      <h1 align="center">Bienvenidos a Future in Present SmartHome </h1>
      <br>
      <Navbar />
      <router-view></router-view>
      <!-- <Binding />
      <Estructura />
      <Atributos />
      <Contadores />
      <Actuadores />
      <Sensores /> -->
    </div>

  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'
// import Binding from './componentes/Binding.vue'
// import Estructura from './componentes/Estructura.vue'
// import Atributos from './componentes/Atributos.vue'
// import Contadores from './componentes/Contadores.vue'
// import Actuadores from './componentes/Actuadores.vue'
// import Sensores from './componentes/Sensores.vue'



export default {
  name: 'App',
  components: {
    Navbar
  //   Binding,
  //   Estructura,
  //   Atributos,
  //   Contadores,
  //   Sensores,
  //   Actuadores
  }
}
</script>

<style>

h1 {
  color: rgba(0, 0, 90, 0.63);
}

hr {
  background-color: darkgrey;
}
#app {

}
</style>
