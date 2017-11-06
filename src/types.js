/**
 * @typedef {Error}
 * @name MapperParamError
 * @memberof mapper.Types
 * @description The subject passed is not the expected type.
 */
export const MapperParamError = {
    name: 'MapperParamError',
    message: 'Invalid parameter «%s». Expecting {%s}, got "%s"',
};

/**
 * @typedef {Object}
 * @name MapperResult
 * @memberof mapper.Types
 * @description A map to all the properties contained in an object.
 */
export const MapperResult = {};

/**
 * @namespace Types
 * @memberof mapper
 * @description Types used on `mapper`
 */
export default {
    ParamError: MapperParamError,
    Result: MapperResult,
};
