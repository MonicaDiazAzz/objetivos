// Components

<template>

  <v-navigation-drawer>
   
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        :prepend-avatar="'https://randomuser.me/api/portraits/women/81.jpg'"
        subtitle="Logged in"
        title="Jane Smith"
      ></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-group value="mi_perfil">
       <template v-slot:activator="{ props }">
         <v-list-item
           v-bind="props"
           prepend-icon="mdi-account-circle"
           title="Mi Portal"
         ></v-list-item>
        </template>
        <v-divider></v-divider>
          <v-list-item  title="Mis Objetivos" value="objetivo"></v-list-item>
        <v-divider></v-divider>  
          <v-list-item  title="Mis Seguimientos" value="seguimiento_objetivos"></v-list-item>
        <v-divider></v-divider>  
          <v-list-item  title="Mis Evaluaciones" value="evaluacion_desempeno"></v-list-item>
        <v-divider></v-divider>  
          <v-list-item  title="Retroalimentacion Recibida" value="retroalimentacion"></v-list-item>
      </v-list-group>

      
      <v-divider></v-divider>
      <v-list-group value="evaluacion_equipo">
       <template v-slot:activator="{ props }">
         <v-list-item
           v-bind="props"
           prepend-icon="mdi-account-group-outline"
           title="Evaluacion Equipo"
         ></v-list-item>
        </template>
          <v-list-group value="objetivo_equipo"  >
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Objetivos Del Equipo"></v-list-item>
            </template>

                <v-list-group value="estableciento_objetivos" >
                  <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Establecimiento de Objetivos"></v-list-item>
                  </template>
                    <v-divider></v-divider>
                    <v-list-item  title="Carga Objetivos" value="carga_objetivos" >
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item  title="Correcion Objetivos" value="correcion_objetivos" >
                    </v-list-item>
                </v-list-group>

                <v-divider></v-divider>
                <v-list-item  title="Seguimiento Objetivos" value="historial_seguimiento" >
                </v-list-item>

                <v-divider></v-divider>
                <v-list-item  title="Evaluacion de Desempeño Actual" value="evaluacion_anual" >
                </v-list-item>
          </v-list-group>
      </v-list-group>
     
     <v-divider></v-divider>
      <v-list-item prepend-icon="mdi-chart-bar" title="Material Apoyo" value="material_apoyo" >
     </v-list-item>   
        
    </v-list>
  </v-navigation-drawer>
  <Principal/>
 
</template>

<script>
import Principal from './Principal.vue' ;
export default {
  components: {
    Principal,  // Asegúrate de registrar el componente aquí
  },

  data() {
    return {
      
    };
  },
};
</script>

<style>
/* Redondear los elementos */
.v-list-item {
  border-radius: 20px;
  color: #00263a;
}
/* Sobrescribir el color cuando el item está activo */
.v-list-item--active {
  background-color: #fcdd3f ; /* Cambiar a tu color oscuro preferido */
}

/* Sobrescribir también el color del título en el estado activo */
.v-list-item--active .v-list-item__title {
  color:#00263a;
}
.v-navigation-drawer {

  margin: 0;
  padding: 0;
  width: 270px;
  position: fixed;
  height: 100%;
  overflow: auto;
  box-shadow: 5px 0px 10px 0px #00263a;
}
.v-divider
{
  color:#00263a;
}
.v-list-group__items .v-list-item{
  padding-inline-start: 5% !important;
}
</style>
