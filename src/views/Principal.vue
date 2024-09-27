<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="3" >
        <v-sheet class="pa-2 ma-2">
          <img
            class="mb-4"
            height="25" 
            :src="logoAzzorti"
          />
        </v-sheet>
      </v-col>
      <v-col cols="9" align-self="center">
        <!-- Puedes agregar contenido aquí -->
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet class="pa-2 ma-2">
          <img
            class="mb-4"
            height="600" 
            :src="fondoPrincipal"
          />
        </v-sheet>
      </v-col>
      <v-col cols="9" align-self="center">
        <!-- Puedes agregar contenido aquí -->
      </v-col>
    </v-row>


    
  </v-container>
</template>


<script>
import logoAzzorti from '../assets/img/Logo2.png'
import fondoPrincipal from '../assets/img/Fondo-Inicial.png'

export default {
  components: {
   
  },

  data() {
    return {
      logoAzzorti,
      fondoPrincipal
    };
  },
};
</script>

<style>
.v-responsive .v-img .mb-4
{
   height: 100vh;
}
</style>
