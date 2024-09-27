<template>
  <v-container class="full-width bg-surface-variant" :style="{ backgroundColor: '#E91E63' }">
  
    <v-stepper v-model="step"  hide-actions :items="['Objetivos', 'Competencias', 'Valores']">
   
      <template v-slot:item.1 class="pruebas">
        <p v-if="showRequiredMessage && step === 1 && !inputValue" class="required-message">Todos los campos son obligatorios</p>
        <v-card title="Objetivos" class='card-pers' >
        
          <v-table>
    <thead>
      <tr>
        <th class="text-left">
          N°
        </th>
        <th class="text-left">
          Peso
        </th>
        <th class="text-left">
          Objetivo
        </th>
        <th class="text-left">
          Indicador
        </th>
        <th class="text-left">
          Tipo de Indicador (Incremento o Reducción)
        </th>
        <th class="text-left">
          Tipo de Objetivo
        </th>
        <th class="text-left column-ingreso">
          Medida (Valor Esperado)
        </th>
        <th class="text-left column-ingreso">
          Medida (Valor Obtenido)
        </th>
        <th class="text-left column-ingreso">
          Resultado %
        </th>
         <th class="text-left column-ingreso">
          Ponderado
        </th>
        <th class="text-left column-observaciones">Observaciones
          
        </th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
         1
        </td>
        <td>
          20%
        </td>
        <td>
          Disminuir la operatividad en la conciliación de recaudos (6 recaudadores) a 30 minutos por agencia
        </td>
        <td>
          Elaboracion programa disminucion conciliacion recaudo al mes de abril /total conciliacion recaudos 30 minutos cada una
        </td>
        <td>
          INCREMENTO
        </td>
        <td>
          ROL/CARGO
        </td>
        <td>
          100%
        </td>
        <td>
          <v-text-field  label="Tipo Objetivo" variant="outlined" v-model="inputValue" ></v-text-field>
        </td>
       <td>
          <v-text-field  label="Resultado" variant="outlined" v-model="inputValue" ></v-text-field>
        </td>
        <td>
          <v-text-field  label="Ponderado" variant="outlined" v-model="inputValue" ></v-text-field>
        </td>
        <td>
          <v-textarea label="Descripción" variant="outlined" row-height="2"
          rows="2"></v-textarea>
        </td>
      </tr>
    </tbody>
  </v-table>

        </v-card>
      </template>

      <template v-slot:item.2 >
        <v-card title="Step Two" >Contenido del paso dos</v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Step Three" >Contenido del paso tres</v-card>
      </template>
    </v-stepper>

    

    <v-row class="mt-4" >
      <v-col>
        <v-btn @click="prevStep" :disabled="step === 1" color="yellow-darken-2">Anterior</v-btn>
      </v-col>
      <v-col class="text-right">
        <v-btn @click="validateAndNext" :disabled="step === 3" color="yellow-darken-2">Siguiente</v-btn>
      </v-col>
    </v-row>
 </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      inputValue: '',
      showRequiredMessage: false
    };
  },
  methods: {
    validateAndNext() {
      if (this.step === 1) {
        this.showRequiredMessage = true;
        if (!this.inputValue) {
          return; // No avanzar si el campo está vacío
        }
      }

      if (this.step < 3) {
        this.step++;
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    }
  },
  computed: {
    requiredRule() {
      return [value => !!value || 'Este campo es obligatorio'];
    }
  }
};
</script>

<style>
  .required-message {
    color: red;
    font-weight: bold;
  }
  body {
    font-size: 15px; /* Tamaño de letra en píxeles */
    background-color: #E91E63;
  }
  .v-stepper-header
  {
    background-color: #FBC02D;
    font-size: 15px;
  }
  .full-width {
    background-color: #Febee;
   
    width: 100vw; /* Ocupa el 100% del viewport width */
    max-width: 100%; /* Asegura que no se exceda el ancho del viewport */
    margin: 0 auto; /* Centra el contenedor si es necesario */
  } 
  .column-observaciones {
    width: 300px; /* Ajusta el ancho de la columna según sea necesario */
  } 
  .column-ingreso
  {
    width: 120px;
  }
  .bg-surface-variant{
    background-color: #FFFFFF !important;
  }
</style>
