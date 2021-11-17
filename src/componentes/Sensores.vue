<template>

  <section class="src-componentes-sensores">
    <div class="jumbotron">
      <h2>Componente SmartHome: Sensores</h2>
      <hr>
      <!-- ---------------------------------------- -->
      <!--         Data Sensores                     -->
      <!-- ---------------------------------------- -->
      <!-- ---------------------------------------- -->
      <button class="btn btn-info my-3" @click="mostrar2=!mostrar2">
          {{ mostrar2? 'Ocultar Informacion' : 'Mostrar Informacion' }}
      </button>
      <br>

      <p v-show="mostrar2" class="alert alert-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis perspiciatis voluptatibus
          exercitationem ad, nemo iste harum officiis fugiat saepe odit incidunt sint, corrupti, doloribus placeat
          cupiditate laudantium aliquid repellendus?
      </p>
      <!-- <p v-show="!mostrar2" class="alert alert-danger">
          ELEMENTO OCULTO
      </p> -->
      <hr>

      
      <button class="btn btn-warning my-3" @click="agregarSensor()"><h5>Agregar Sensor</h5></button>

      <div v-if="sensores.length">
          <div class="table-responsive">
              <table class="table table-dark">
                  <tr>
                      <th>Nombre</th>
                      <th>Valor</th>
                      <th>Descripcion</th>
                      <th>Status</th>
                      <th>Foto</th>
                  </tr>
                  <tr v-for="(sensor,index) in sensores2" :key="index">
                      <td>{{ sensor.nombre }}</td>
                      <td>{{ sensor. valor}}</td>
                      <td>{{ sensor.descripcion }}</td>
                      <td>{{ sensor.status? 'Si':'No' }}</td>
                      <td>
                          <img :src="sensor.foto" width="50" :alt="sensor.nombre">
                      </td>
                  </tr>
              </table>

              <h4 class="alert alert-info">
                  <span v-if="calcularSensoresActivos.ninguno">Ningun sensor esta activo</span>
                  <span v-else-if="calcularSensoresActivos.todos">Todos los sensores activos</span>
                  <span v-else>
                      {{calcularSensoresActivos.cantidad}} de {{calcularSensoresActivos.total}} sensores 
                      {{ calcularSensoresActivos.uno? 'activo':'activos' }} en total.
                  </span>
              </h4>

          </div>
          <hr>

          <div class="media alert alert-success" v-for="(sensor,index) in sensores2" :key="index">
              <img :src="sensor.foto" width="150" class="mr-3" :alt="sensor.nombre">
              <div class="media-body ml-3">
                  <h4><u>Sensor {{ index + 1 }}</u></h4>
                  <br>
                  <p>Nombre: {{sensor.nombre}} [ {{sensor.status? 'Encendido' : 'Apagado'}} ]</p>
                  <p>Valor: <i>{{sensor.valor}}</i></p>
                  Encender <input type="checkbox" v-model="sensor.status">
                  <button class="btn btn-danger ml-3" @click="borrar(index)">Borrar</button>
              </div>
          </div>
      </div>
      <h3 v-else class="alert alert-warning">
          No se encontraron sensores
      </h3>
      <hr>

      <div class="jumbotron">
        <h2>Componente Atributos</h2>
        <hr>
        <hr>
        <br>

        <!-- ------------------------------------------------ -->
        <!--     Directivas de Atributo (CSS condicional)     -->
        <!-- ------------------------------------------------ -->
        <h3>Directivas de Atributo</h3>
        <hr>

        <h4>:style</h4>

        <button class="btn btn-info my-3" @click="estado1=!estado1">Cambiar Fondo</button>

        <!-- <p style="color:white; background-color:green; border-radius: 10px; padding: 10px;"> -->
        <!-- <p :style="{color:'white', 'background-color':estado1?'green':'red', 'border-radius':'10px', padding:'10px'}"> -->
        <p :style="getEstilos(estado1)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere soluta aliquid, optio repellendus, quibusdam hic, maxime sint voluptatem culpa itaque tempora praesentium rem dolor debitis. Sint vero at iste.
        </p>

        <hr>
        <h4>:class</h4>

        <button class="btn btn-info my-3" @click="estado2=!estado2">Cambiar Fondo</button>

        <!-- <p class="text-white bg-success p-2"> -->
        <!-- <p :class="{'text-white':true, 'bg-success':estado2, 'bg-danger':!estado2, 'p-2': true}"> -->
        <!-- <p :class="getClass(estado2)"> -->
        <p :class="['text-white', {'bg-success':estado2, 'bg-danger':!estado2 }, 'p-2' ]">                
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere soluta aliquid, optio repellendus, quibusdam hic, maxime sint voluptatem culpa itaque tempora praesentium rem dolor debitis. Sint vero at iste.
        </p>
        <hr>

      </div>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-sensores',
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar: true,
        mostrar2: true,
        sensores : [
            'Temperatura Cuarto',
            'Humedad Parque',
            'Temperatura Quincho',
            'Temperatura Habitacion I'
        ],
        sensores2 : [
            { nombre: 'Cuarto (T)',  descripcion: 'medicion de temperatura del cuarto de Maria (°C)',    valor: 32,    status: true,   foto: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_43-512.png' },
            { nombre: 'Parque (H)',   descripcion: 'medicion de humedad patio trasero (%)',  valor: 24,    curso: false,  foto: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_44-256.png' },
            { nombre: 'Quincho (T)',    descripcion: 'medicion de temperatura del quincho (°C)',  valor: 21,    curso: false,  foto: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_43-512.png' },
            { nombre: 'Patio I (T)',  descripcion: 'medicion de temperatura del patio (°C)',  valor: 27,    curso: true,   foto: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_43-512.png' },
        ],
        estado1 : true,
        estado2 : true
      }
    },
    methods: {
      borrar(index) {
            console.log('Borrar',index)
            this.sensores2.splice(index,1)
        },
        agregarSensor() {
            let sensor = { 
                nombre: 'Habitacion X (T)',
                descripcion: 'medicion de temperatura del cuarto de Bob (°C)',
                valor: 24,
                status: true,
                foto: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_43-512.png' 
            }      
            this.sensores2.push(sensor)
        },
        getEstilos(estado) {
            return {
                color: 'white',
                'background-color': estado?'green':'red',
                'border-radius': '10px',
                padding: '10px'
            }
        },
        getClass(estado) {
            return {
                'text-white': true, 
                'bg-success': estado, 
                'bg-danger': !estado, 
                'p-2': true
            }
        },
    },
    computed: {
      calcularSensoresActivos() {
            let cant = 0
            this.sensores2.forEach(sensor => {
                if(sensor.status) cant++
            })
            return {
                cantidad : cant,
                total: this.sensores.length,
                ninguno: cant == 0,
                todos: cant == this.sensores.length,
                uno: cant == 1
            }
        }
    

    }
}


</script>

<style scoped lang="css">
  .src-componentes-sensores {

  }
  .jumbotron {
  background-color: orangered;
  color: white;
  }  
</style>
