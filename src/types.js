/**
 * The subject passeed to the Mapper is not the expected type.
 * @typedef {Error}
 * @memberof Types
 */
export const MapperParamError = {
    name: 'MapperParamError',
    message: 'Invalid parameter «%s». Expecting {%s}, got "%s"',
};

/**
 * A map to all the properties contained in an object.
 * @typedef {Object}
 * @memberof Types
 */
export const MapperResult = {};

export default {
    ParamError: MapperParamError,
    Result: MapperResult,
};
