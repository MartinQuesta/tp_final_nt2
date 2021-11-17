<template lang="html">

  <section class="src-componentes-actuadores">
    <div class="jumbotron">
      <h2>Actuadores</h2>
      <hr>
      <hr>
      <br>

      <!-- ---------------------------------------- -->
      <!--         Directivas Data binding          -->
      <!-- ---------------------------------------- -->
      <h3>Directivas Data binding</h3>
      <hr>

      <h4><u>Interpolación / v-text / v-html</u></h4>

      <b>{{ 3 + 4 }}</b>
      <br><br>

      <div>{{ mensaje }}</div>
      <div v-text="mensaje"></div>
      <div v-html="mensaje"></div>
      <br>

      <div>{{ mensajeHTML }}</div>
      <div v-text="mensajeHTML"></div>
      <div v-html="mensajeHTML"></div>
      <hr>

      <!-- ---------------------------------------- -->
      <h4><u>Property binding / v-bind</u></h4>
      <input type="text" value="123"> <br>
      <input type="text" value="valor"> <br>
      <input type="text" v-bind:value="valor"> {{ valor }} <br>
      <input type="text" :value="valor"> {{ valor }} <br>
      <hr>

      <!-- ---------------------------------------- -->
      <h4><u>Event binding / v-on</u></h4>
      <button class="btn btn-success my-3 mr-2" v-on:click="contador++">Contar {{ contador }}</button>
      <button class="btn btn-warning my-3 mr-2" @click="contador2++">Contar {{ contador2 }}</button>
      <button class="btn btn-danger my-3" @click="incrementar()">Contar {{ getContador() }}</button>
      <hr>

      <!-- ---------------------------------------- -->
      <h4><u>Doble Data binding / v-model</u></h4>
      <br>

      <h5>Manual</h5>
      <input type="text" :value="valor2" @input="actualizar($event)"> {{ valor2 }} <br>
      <br>

      <h5>Automático</h5>
      <input type="text" v-model="valor3"> {{ valor3 }} <br>
      <br>
      <hr>      

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-actuadores',
    props: [],
    mounted () {

    },
    data () {
      return {
        mensaje: 'Soy un Actuador',
        mensajeHTML: '<i class="bg-success text-white">Soy un mensaje</i>',
        valor: 123,
        valor2: 456,
        valor3: 789,
        contador: 123,
        contador2: 456,
        contador3: 789,
      }
    },
    methods: {
      incrementar() {
            this.contador3++
        },
        getContador() {
            return this.contador3
        },
        actualizar(e) {
            console.log('actualizar',e)
            let valor = e.target.value
            this.valor2 = valor
        },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-actuadores {

  }
  .jumbotron {
    background-color: rgb(134, 1, 146);
    color: white;
  } 
</style>
