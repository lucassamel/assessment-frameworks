<template>
    <div>
        <h1>Detalhe do Item</h1>

        <div class="cards">

      <b-card 
        :key="itenById(id)"
        :title="itenById(id).title"
        :img-src="itenById(id).src"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text> {{ itenById(id).descricao }} </b-card-text>
        <b-card-text>Estoque Disponível: {{ itenById(id).estoque }}</b-card-text>    

        <b-button class="margemBotao" size="sm" variant="success"
         @click="editar" >Editar Item</b-button>    
                  
      </b-card>      
    </div>  
    <router-view></router-view>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name:'DetalheIten',
    data: function(){
        return{ 
            id : this.$route.params.id,}
    },

    computed: mapGetters(["itenById"]),

    methods: {
        editar() {
        this.$router.push({ name: 'EditIten' , params: { id: this.id } });
        }
 }
}

</script>

<style scoped>

</style>