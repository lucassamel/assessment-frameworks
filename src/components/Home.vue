<template>
  <div class="margem">
    <div class="cards">
      <b-card  :key="i.id" v-for="i in allItens"
        :title="i.title"
        :img-src="i.src"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text> {{i.descricao}} </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
    <Cadastro />
  </div>
</template>

<script>
import Cadastro from "./Cadastro";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Cadastro
  },
  computed: mapGetters(["allItens"]),
 
};
</script>

<style >
.cards{
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.margem{
    margin: 24px;
}
</style>