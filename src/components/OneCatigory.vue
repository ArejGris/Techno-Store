<template>
    <v-card
    class="mx-auto my-12 card" width="200" height="auto" sm="auto"
    >
    <v-card-item >
      <v-img
        :src="img"
        fluid
        height="70"
        aspect-ratio="4/4"   
      >
      </v-img>
    </v-card-item>
     
      <v-card-title>
        <div class="text-h4 mb-2 text-center" center style="text-align:center">
         {{title}}
        </div>
      <v-divider class="mt-6 mx-4"></v-divider>
        <div class="text-h6 font-weight-regular grey--text">
         <v-btn center @click="turnshow">show details</v-btn>
        </div>
      </v-card-title>
    
  <v-spacer></v-spacer>
  
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
           
  <v-card
    class="mx-auto"
    max-width="300"
    z-index="1"
  >
    <v-list >
        <v-list-item v-for="(item,i) in filterItems" :key="i" fluid>
           
                <v-list-item-avatar>
                <v-avatar color="rgba(19,84,122,.8)"><v-img :src="item.image"></v-img>
            </v-avatar>
        </v-list-item-avatar>
            <v-list-title v-html="item.title"></v-list-title>
            
        </v-list-item>
    </v-list>
  </v-card>
            </div>
          </v-expand-transition>

  
    </v-card>
</template>  
    <script>
    export default{
    props: ['id','title','img','items','text'],
    data:()=>({
        show:false
    }),
    methods: {
        turnshow() {
            this.show=!this.show;
        },
        blinds() {
            alert("Toggling Blinds...");
        }
    },
    computed: {
        go() {
            return "/cattigories/" + this.id;
        },
        products(){
            return this.$store.getters.products;
            
        },
        filterItems(){
           return this.products.filter(item=>item.catId==this.id)
        }
    },
}
    </script>
    <style scoped>
    .heading{
        text-align: center;
    }
    .card{
        padding: 1rem;
    }
    .image{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>