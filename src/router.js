import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import EditarIten from './components/EditarIten.vue'
import DetalheIten from './components/DetalheIten.vue'
import EditIten from './components/EditIten.vue'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/iten',
            name: 'editarIten',
            component: EditarIten,
        },
        {
            path: '/detalhe-iten/:id',
            name: 'DetalheIten',
            component: DetalheIten,
            children: [
                {
                    path: 'edit',
                    name: 'EditIten',
                    component: EditIten
                }
            ]
        },
        
      
    ]
});