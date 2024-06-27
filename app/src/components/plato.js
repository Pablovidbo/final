export default {
    template: `
        <div class="plato-details">
            <h2>Receta</h2>
            <div class="plato-details-content">
                <img :src="recipe.image" :alt="recipe.name" class="plato-image">
                <div class="plato-description">
                    <h3>{{ recipe.name }}</h3>
                    <h4>Ingredientes:</h4>
                    <ul>
                        <li v-for="ingrediente in selectedIngredients" :key="ingrediente.id">
                            {{ ingrediente.name }}
                        </li>
                    </ul>
                    <h4>Descripcion:</h4>
                    <p>{{ recipe.description }}</p><br>
                </div>
            </div>
        </div>
    `,
    props: {
        recipe: {
            type: Object,
            required: true
        },
        selectedIngredients: {
            type: Array,
            default: () => []
        }
    },
    name: 'Plato'
}
