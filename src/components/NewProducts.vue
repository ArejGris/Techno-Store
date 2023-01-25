<template>
    <v-app>
        <v-container>
           
            <v-row cols="3" v-if="page===1">
                <v-col v-for="(item,i) in products.slice(0,3)" :key="i" >
                    <NewProduct
                    :id="item.id"
                    :title="item.title"
                    :text="item.text"
                    :price="item.price"
                    :image="item.image"
                    />
                </v-col>
            </v-row>
                <v-row cols="3" v-else-if="page===2">
                    <v-col v-for="(item,i) in products.slice(2,5)" :key="i">
                        <NewProduct
                        :id="item.id"
                        :title="item.title"
                        :price="item.price"
                        :text="item.text"
                        :image="item.image"
                        />
                    </v-col></v-row>
                    <v-row v-else-if="page===3">
                    <v-col v-for="(item,i) in products.slice(2,5)" :key="i">
                        <NewProduct
                        :id="item.id"
                        :title="item.title"
                        :price="item.price"
                        :text="item.text"
                        :image="item.image"
                        />
                    </v-col>

                </v-row>
                <v-row cols="3" v-else-if="page===4">
                    <v-col v-for="(item,i) in products.slice(8,11)" :key="i">
                        <NewProduct
                        :id="item.id"
                        :title="item.title"
                        :price="item.price"
                        :text="item.text"
                        :image="item.image"
                        />
                    </v-col>

                </v-row>
                <v-row v-else-if="page===5">
                    <v-col v-for="(item,i) in products.slice(11,14)" :key="i">
                        <NewProduct
                        :id="item.id"
                        :title="item.title"
                        :price="item.price"
                        :text="item.text"
                        :image="item.image"
                        />
                    </v-col>

                </v-row>
                <v-row v-else-if="page===6">
                    <v-col v-for="(item,i) in products.slice(14,17)" :key="i">
                        <NewProduct
                        :id="item.id"
                        :title="item.title"
                        :price="item.price"
                        :text="item.text"
                        :image="item.image"
                        />
                    </v-col>

                </v-row>
                <v-row v-else-if="page===7">
                    <v-col v-for="(item,i) in products.slice(17,20)" :key="i">
                        <NewProduct
                        :id="item.id"
                        :title="item.title"
                        :price="item.price"
                        :text="item.text"
                        :image="item.image"
                        />
                    </v-col>

                </v-row>
                <v-row v-else>
                    <v-col v-for="(item,i) in products.slice(5,8)" :key="i">
                        <NewProduct
                        :id="item.id"
                        :title="item.title"
                        :image="item.image"
                        :price="item.price"
                        :text="item.text"
                        />
                    </v-col>

                </v-row>
            
              <v-divider></v-divider>
    <div class="text-center center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>

        </v-container>

    </v-app>
</template>
<script>
import NewProduct from './NewProduct.vue';
export default{
    components:{NewProduct},
    data: () => ({
        page:1,
      panel: [0, 1],
      disabled: false,
      readonly: false,
    }),
    computed:{
      products(){
        return this.$store.getters.products
      }

}}
</script>
<style>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>