<template>
    <v-container
      class="grey lighten-5 mb-6 "
    >
<v-container >
    <v-row no-gutters="">
        <v-col cols="3" md="3" sm="12"  class="warp" v-for="(item,i) in catigories"
        :key="i"
        >
        <one-catigory
        :id="item.id"
        :title="item.title"
        :text="item.text"
        :img="item.img"></one-catigory>
    </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    
    </v-container>
    
    </template>
    <script>
    import OneCatigory from './OneCatigory.vue';
    export default{
        
        components:{
            OneCatigory
        },
        computed:{
            catigories(){
                return this.$store.getters.catigoris
            }
        }
    }
    </script>
    <style>
    .mid{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>