<template>
    <div>
        <div class="form">
      <b-form @submit.prevent="onSubmit" @reset="onReset" >
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
            required
            placeholder="Entre com a quantidade de itens"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
     <!--<b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>-->
    </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:"EditIten",
     data() {
    return {
      id:this.$route.params.id,
      iten_add :{
        title: "",
        descricao: "",
        estoque:""
      }
    }
  },computed: mapGetters(["itenById"]),
  created() {
    this.iten_add = this.itenById(this.id)
  },
  methods: {
    ...mapActions(["updateIten"]),
    onSubmit() {
      this.updateIten(this.iten_add);
      alert("Item editado com sucesso!")
    }
  },
  onReset() {
      
      // Reset our form values
      this.form.title = "";
      this.form.descricao = "";
      this.form.estoque = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    
    
}
</script>

<style  scoped>

</style>