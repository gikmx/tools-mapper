/**
 * @module __types
 * @memberof Tools
 */
export default {

    /**
    * The subject passeed to the Mapper is not the expected type.
    * @typedef {Error}
    * @memberof Tools.__types
    */
    MapperParamError: {
        name: 'MapperParamError',
        message: 'Invalid parameter «%s». Expecting {%s}, got "%s"',
    },

    /**
    * A map to all the properties contained in an object.
    * @typedef {Object}
    * @memberof Tools.__types
    */
    MapperResult: {},

};
