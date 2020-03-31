import axios from "axios";

const state = {
    itens: [
      {
        "id": 1,
        "title": "Pão",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },
      {
        "id": 2,
        "title": "Coca-Cola",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },
      {
        "id": 3,
        "title": "Leite",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },
      {
        "id": 4,
        "title": "Leite",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },
      {
        "id": 5,
        "title": "Leite",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },
      {
        "id": 6,
        "title": "Leite",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },
      {
        "id": 7,
        "title": "Leite",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },
      {
        "id": 8,
        "title": "Leite",
        "src":"https://abrilboaforma.files.wordpress.com/2017/03/thinkstockphotos-177781964.jpg",
        "descricao": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
        "estoque": 2
      },

    ]
  };

  const getters = {
    allItens: state => state.itens
  };
  
  const actions = {
    getComments({ commit }) {
      axios.get(
        this.state
      ).then((response) => {
        commit('getItens', response.data);
      });
    },
  
    addIten({ commit }, new_iten) {
      const new_index = state.itens.length + 1
      const response = {
        "id": new_index,
        "title": new_iten.title,
        "descricao":new_iten.descricao,
        "estoque":new_iten.estoque,
        "src":new_iten.src,
      }
      commit("addIten", response);
    }
  };
  const mutations = {
    getComments: (state, itens) => (state.itens = itens),
    addIten: (state, new_iten) => state.itens.push(new_iten),
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };