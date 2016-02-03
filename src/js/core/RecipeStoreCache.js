//-------------------------------------------------------------------------------
// Imports
//-------------------------------------------------------------------------------

import {
    Class,
    Map,
    Obj
} from 'bugcore';


//-------------------------------------------------------------------------------
// Declare Class
//-------------------------------------------------------------------------------

/**
 * @class
 * @extends {Obj}
 */
const RecipeStoreCache = Class.extend(Obj, {

    _name: 'recipe.RecipeStoreCache',


    //-------------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------------

    /**
     * @constructs
     */
    _constructor() {

        this._super();


        //-------------------------------------------------------------------------------
        // Private Properties
        //-------------------------------------------------------------------------------

        /**
         * @private
         * @type {Map.<string, Recipe>}
         */
        this.recipeNameToRecipeMap  = new Map();
    },


    //-------------------------------------------------------------------------------
    // Getters and Setters
    //-------------------------------------------------------------------------------

    /**
     * @return {Map.<string, Recipe>}
     */
    getRecipeNameToRecipeMap() {
        return this.recipeNameToRecipeMap;
    },


    //-------------------------------------------------------------------------------
    // Public Methods
    //-------------------------------------------------------------------------------

    /**
     * @param {string} recipeName
     * @returns {Recipe}
     */
    getRecipe(recipeName) {
        return this.recipeNameToRecipeMap.get(recipeName);
    },

    /**
     * @param {string} recipeName
     * @returns {boolean}
     */
    hasRecipe(recipeName) {
        return this.recipeNameToRecipeMap.containsKey(recipeName);
    },

    /**
     * @param {string} recipeName
     * @param {Recipe} recipe
     */
    setRecipe(recipeName, recipe) {
        this.recipeNameToRecipeMap.put(recipeName, recipe);
    }
});


//-------------------------------------------------------------------------------
// Exports
//-------------------------------------------------------------------------------

export default RecipeStoreCache;
