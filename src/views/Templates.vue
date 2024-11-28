<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="18" v-for="n in 4" :key="n">
          <v-card class="template">
            <v-img
              class="image-placeholder"
              src=""
              alt="Template Image"
            ></v-img>
            <v-card-title class="text-center">TEMPLATE {{ n }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "Templates",
  };
  </script>
  
  <style scoped>
  .template {
    border: 1px solid #cccccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    padding: 10px;
    text-align: center;
  }
  
  .image-placeholder {
    width: 100%;
    height: 150px;
    background-color: #e0e0e0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  