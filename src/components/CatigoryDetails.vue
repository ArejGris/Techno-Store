
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-subheader >
             hello
            </v-subheader>
        <v-list >
          <template v-for="item in filterItems" 
              :key="item.id">
            <v-list-item
            >
           
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.price"></v-list-item-subtitle>
                <v-list-item-avatar>
          <v-img :src="logo" sizes="small" aspect-ratio="4/3" height="100"></v-img>
        </v-list-item-avatar>
              </v-list-item-content>
            </v-list-item>
        </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    props:['id'],
    data:()=>({
      logo:'../assets/laptop2.jpg',
    }),
    methods:{

    },
       computed:{
        
        items(){
            return this.$store.getters.products;
            
        },
        filterItems(){
            const id=this.$route.params.id
           return this.items.filter((item)=>item.catId==id)
        }
        
        }
       
    }
    
  
</script>