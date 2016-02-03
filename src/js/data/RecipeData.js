//-------------------------------------------------------------------------------
// Imports
//-------------------------------------------------------------------------------

import {
    Class,
    IObjectable,
    Obj
} from 'bugcore';


//-------------------------------------------------------------------------------
// Declare Class
//-------------------------------------------------------------------------------

/**
 * @class
 * @extends {Obj}
 */
const RecipeData = Class.extend(Obj, {

    _name: 'recipe.RecipeData',


    //-------------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------------

    /**
     * @constructs
     * @param {{
     *      collaborators: {},
     *      createdAt: number,
     *      lastPublishedVersion: string,
     *      name: string,
     *      scope: string,
     *      type: string,
     *      updatedAt: number
     * }} data
     */
    _constructor(data) {

        this._super();


        //-------------------------------------------------------------------------------
        // Public Properties
        //-------------------------------------------------------------------------------

        /**
         * @private
         * @type {{}}
         */
        this.collaborators          = data.collaborators;

        /**
         * @private
         * @type {number}
         */
        this.createdAt              = data.createdAt;

        /**
         * @private
         * @type {string}
         */
        this.lastPublishedVersion   = data.lastPublishedVersion;

        /**
         * @private
         * @type {string}
         */
        this.name                   = data.name;

        /**
         * @private
         * @type {string}
         */
        this.scope                  = data.scope;

        /**
         * @private
         * @type {string}
         */
        this.type                   = data.type;

        /**
         * @private
         * @type {number}
         */
        this.updatedAt              = data.updatedAt;
    },


    //-------------------------------------------------------------------------------
    // Getters and Setters
    //-------------------------------------------------------------------------------

    /**
     * @return {{}}
     */
    getCollaborators() {
        return this.collaborators;
    },

    /**
     * @return {number}
     */
    getCreatedAt() {
        return this.createdAt;
    },

    /**
     * @return {string}
     */
    getLastPublishedVersion() {
        return this.lastPublishedVersion;
    },

    /**
     * @return {string}
     */
    getName() {
        return this.name;
    },

    /**
     * @return {string}
     */
    getScope() {
        return this.scope;
    },

    /**
     * @return {string}
     */
    getType() {
        return this.type;
    },

    /**
     * @return {number}
     */
    getUpdatedAt() {
        return this.updatedAt;
    },


    //-------------------------------------------------------------------------------
    // IObjectable Implementation
    //-------------------------------------------------------------------------------

    /**
     * @return {Object}
     */
    toObject() {
        return {
            collaborators: this.collaborators,
            createdAt: this.createdAt,
            lastPublishedVersion: this.lastPublishedVersion,
            name: this.name,
            scope: this.scope,
            type: this.type,
            updatedAt: this.updatedAt
        };
    }
});


//-------------------------------------------------------------------------------
// Interfaces
//-------------------------------------------------------------------------------

Class.implement(RecipeData, IObjectable);


//-------------------------------------------------------------------------------
// Exports
//-------------------------------------------------------------------------------

export default RecipeData;
