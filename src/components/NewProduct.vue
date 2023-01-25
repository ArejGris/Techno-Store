
    <template>
        <v-card
          class="mx-auto" sm="auto"
        >
          <v-img
            :src="image"
            height="200px"
            thumbnuils
            contain
          ></v-img>
      
          <v-card-title>
            {{title}}
          </v-card-title>
      
          <v-card-subtitle>
            <h3>price$:{{ price }}</h3>
          </v-card-subtitle>
      
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
            >
              Explore
            </v-btn>
      
            <v-spacer></v-spacer>
      
            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>
      
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
             <v-expand-text >{{ text }}</v-expand-text>
            </div>
          </v-expand-transition>
        </v-card>
      </template>
      <script>
      export default {
        props:['id','title','image','price','text'],
        data: () => ({
          show: false,
        }),
      }
    </script>