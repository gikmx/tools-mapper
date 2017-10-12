/**
 * @namespace __types
 * @memberof Tools
 */
export default {

    /**
    * The subject passeed to the Mapper is not the expected type.
    * @typedef {Error} mapperTypeError
    * @memberof Tools.__types
    */
    mapperTypeError: {
        name: 'mapperTypeError',
        message: 'Expecting subject to be {Object}',
    },

    /**
    * A map to all the properties contained in an object.
    * @typedef {Object} mapperResult
    * @memberof Tools.__types
    */
    mapperResult: {},

};
