import Ingredientes from './components/ingredientes.js';
import Plato from './components/plato.js';
import ApiService from './services/api.js';

var app = new Vue({
    el: '#app',
    data: {
        ingredientes: [],
        ingredientesSeleccionados: [],
        plato: null,
        noResults: false,
        platos: []
    },
    components: {
        Ingredientes,
        Plato
    },
    methods: {
        obtenerIngredientes() {
            const servicio = new ApiService();
            servicio.fetchIngredients((error, data) => {
                if (error) {
                    console.error('Error al obtener ingredientes:', error);
                } else {
                    this.ingredientes = data;
                }
            });
        },
        obtenerPlatos() {
            const servicio = new ApiService();
            servicio.fetchRecipes((error, data) => {
                if (error) {
                    console.error('Error al obtener platos:', error);
                } else {
                    this.platos = data;
                }
            });
        },
        cocinarPlato() {
            const idsSeleccionados = this.ingredientesSeleccionados.map(ing => ing.id);
            const plato = this.platos.find(plato => {
                return plato.ingredients.every(id => idsSeleccionados.includes(id));
            });

            if (plato) {
                this.plato = plato;
                this.noResults = false;
            } else {
                this.plato = null;
                this.noResults = true;
            }
        },
        handleSeleccionarIngrediente(ingrediente) {
            const index = this.ingredientesSeleccionados.findIndex(i => i.id === ingrediente.id);
            if (index === -1) {
                this.ingredientesSeleccionados.push(ingrediente);
            } else {
                this.ingredientesSeleccionados.splice(index, 1);
            }
        },
        inicializarMensaje() {
            console.log("Bienvenidos a la cocina digital");
        }
    },
    mounted() {
        this.obtenerIngredientes();
        this.obtenerPlatos();
        this.inicializarMensaje();
    },
    template: `
        <div id="app">
            <div class="ingredientes-container">
                <Ingredientes :ingredients="ingredientes" 
                              @select="handleSeleccionarIngrediente" 
                              @cook="cocinarPlato" 
                              :selectedIngredients="ingredientesSeleccionados"/>
            </div>
            <div class="plato-container">
                <Plato v-if="plato" :recipe="plato" :selectedIngredients="ingredientesSeleccionados"/>
                <p v-if="noResults">NO hay resultados</p>
            </div>
        </div>
    `
});
