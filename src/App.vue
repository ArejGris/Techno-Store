<template>
  
    <v-layout>
      <v-app-bar
        color="teal-darken-4" @click="drawer=!drawer"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Technology Store</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main style="height: 2500px;"  
        location="right"
        temporary>
          <router-view></router-view>
        
      </v-main>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
        ><v-list-item v-for="(item,i) in items" :key="i">
          <v-list-item-title >{{ item.title }}
        </v-list-item-title>
        <router-link :to="item.value"> 
           <v-btn
        class="ma-2"
        color="rgba(19,84,122,.8)" style="color:white;;" 
      >
        <v-icon
          start
          icon="mdi-arrow-right"
          fluid
        ></v-icon>
        visit
      </v-btn>
    </router-link>
    
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
      </v-navigation-drawer>
    </v-layout>
 
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    cols:0,
    group: null,
    items: [
      {
        title: 'main',
        value: '/cattigories',
      },
      
      {
        title: 'all catigory',
        value: '/cattigories',
      },
      {
        title: 'all products',
        value: '/thecat',
      },
      {
        title: 'products details',
        value: '/newproduct',
      }
    ],
  }),

  watch: {
    group () {
      this.drawer = false;
      this.cols=4
    },
  },
}
</script>
<style>

a{

  
}
</style>
