<template>
<v-layout>
    <v-main >
      <v-container class="pa-1">
        <v-item-group
          v-model="selection"
          multiple
        >
          <v-row>
            <v-col cols="12" height="13px" fluid width="100%">
                
        <div class="control-group">
            <div class="label">search</div>
            <input type="text"  placeholder="type product" v-model="search"/>
        </div>
            </v-col>
            <v-col
              v-for="(item, i) in products"
              :key="i"
              cols="6"
              md="6"
            ><v-card rounded fluid>
                <v-item v-slot="{ isSelected, toggle }" class="my-12 p-2" >
                <v-item-title class="text-h6 mb-2 text-center">{{ item.title }}</v-item-title>
                <v-img
                  :src="item.image"
                  height="70"
                  rounded="circle"
                  fluid
                  class="text-right pa-2"
                  @click="toggle"
                >
                  <v-btn :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"></v-btn>
                </v-img>
                <v-expansion-panels>
  <v-expansion-panel
    title="more"
    :text="item.title"
  >
  </v-expansion-panel>
</v-expansion-panels>
              </v-item>
            </v-card>
              
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-main>
    
    <v-navigation-drawer location="left">
       <v-list > 
           <v-list-item v-for="item in catigorys" 
             :key="item.id">
             <v-list-item-content location="right">
               <v-list-item-avatar><v-avatar>
               <v-img :src="item.img" sizes="small" aspect-ratio="4/3" height="100"></v-img>
       </v-avatar>
         </v-list-item-avatar>
               <v-list-item-title v-html="item.title"></v-list-item-title>
               <v-list-item-subtitle v-html="item.text"></v-list-item-subtitle>
               
             </v-list-item-content>
           </v-list-item>
       
       </v-list>
      </v-navigation-drawer>
</v-layout>
    
  </template>
  <script setup>
  import {computed, ref} from 'vue';
  import {useStore} from 'vuex';
  const store=useStore();
        const search=ref(null)
           const catigorys=computed(()=>{
                return store.getters.catigoris
            });
           const products=computed(()=>{
                return store.getters.products;
               
                });
           /*   const filterProducts=computed(()=>{
                    if(search.value){
                        console.log(lh)
                        return products.value.filter((prod)=>{
                           return search.value.toLowerCase().split(" ").every(v=>prod.title.toLowerCase().includes(v)) })
                       

                    }
                    return products.value
                
                }
            ); */
        
</script>