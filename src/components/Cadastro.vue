<template>
  <div>
      <div class="form">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nome do Item:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
          placeholder="Entre com o nome do item"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Descricao do Item:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.descricao"
          required
          placeholder="Entre com a descrição do item"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Quantidade" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.estoque"
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
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
      </div>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";

  export default {
      name: 'cadastro',
    data() {
      return {
        form: {
          title: '',
          descricao: '',
          src:'https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg',
          estoque:''
        },
        show: true
      }
    },
    methods: {
      ...mapActions(["addIten"]),

      onSubmit(evt) {
        this.addIten(this.form);
        evt.preventDefault()
        alert(JSON.stringify("Item adicionado com secesso!!!"))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.descricao = ''
        this.form.estoque = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style >

.form{
    margin: 24px;
}

</style>