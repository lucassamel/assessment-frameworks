<template>
    <div>
        <h2>Editar Item</h2>
    <div class="form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Nome do Item:" label-for="input-1" description>
          <b-form-input
            id="input-1"
            v-model="iten_add.title"
            type="text"
            required
            placeholder="Entre com o nome do item"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Descricao do Item:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="iten_add.descricao"
            required
            placeholder="Entre com a descrição do item"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Quantidade" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="iten_add.estoque"
            type="number"
            pattern=".{1,}"
            min="0"
            required
            placeholder="Entre com a quantidade de itens"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name:'editarIten',
    data() {
    return {
      id:this.$route.params.id,
      iten_add :{
        title: "",
        descricao: "",
        estoque:""
      }
    }
    },computed: mapGetters(["itensById"]),
  created() {
    this.iten_add = this.itenById(this.id)
  },
  methods: {
    ...mapActions(["updateIten"]),
    onSubmit() {
      this.updateIten(this.iten_add);
      alert("Dados esditados com sucesso")
    }
  }

}
</script>

<style>

</style>