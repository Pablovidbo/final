export default {
    template: `
        <div class="ingredientes-container">
            <h2 class="ingredientes-title">Selecciona tus ingredientes</h2>
            <ul class="ingredient-list">
                <li v-for="ingrediente in ingredients" :key="ingrediente.id" class="ingredient-list-item">
                    <input type="checkbox" :id="'ingrediente_' + ingrediente.id" v-model="ingrediente.isSelected" @change="seleccionarIngrediente(ingrediente)" class="ingredient-checkbox">
                    <label :for="'ingrediente_' + ingrediente.id" class="ingredient-label">{{ ingrediente.name }}</label>
                </li>
            </ul>
            <button @click="$emit('cook')" class="cook-button">Cocinar</button>
        </div>
    `,
    props: {
        ingredients: {
            type: Array,
            required: true
        },
        selectedIngredients: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        seleccionarIngrediente(ingrediente) {
            this.$emit('select', ingrediente);
        }
    },
    name: 'Ingredientes'
}
