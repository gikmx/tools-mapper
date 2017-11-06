/**
 * @typedef {Error}
 * @name MapperParamError
 * @memberof Types
 * @description The subject passed is not the expected type.
 */
export const MapperParamError = {
    name: 'MapperParamError',
    message: 'Invalid parameter «%s». Expecting {%s}, got "%s"',
};

/**
 * @typedef {Object}
 * @name MapperResult
 * @memberof Types
 * @description A map to all the properties contained in an object.
 */
export const MapperResult = {};

export default {
    ParamError: MapperParamError,
    Result: MapperResult,
};
