<template>

 <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <!-- opción ruta root -->
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- opción ruta binding -->
          <li class="nav-item">
            <router-link to="/sensores">
              <a class="nav-link" href="#">Sensores</a>
            </router-link>
          </li>

          <!-- opción ruta estructura -->
          <li class="nav-item">
            <router-link to="/actuadores">
              <a class="nav-link" href="#">Actuadores</a>
            </router-link>
          </li>

          <!-- opción ruta atributos -->
          <li class="nav-item">
            <router-link to="/reporting">
              <a class="nav-link" href="#">Reporting</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>
  </section>


</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }
</style>
