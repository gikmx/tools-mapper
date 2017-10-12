import { Is } from '@gik/tools-checker';
import Thrower from '@gik/tools-thrower';

/**
 * An error thrown then the subject passed to Mapper is not the expected type.
 * @typedef {mapperTypeError}
 * @memberof Tools.__type
 */
export const Errors = {
    notype: { name: 'mapperTypeError', message: 'Expecting subject to be {Object}' },
};

/**
 * A map to all the properties contained in an object.
 * @typedef {PropertyMap}
 * @memberof Tools.__type
 */

/**
 * Generates an object containing a map for all the properties available on `subject`.
 * @module mapper
 * @memberof Tools
 *
 * @param {Object} subject - The object you want to map.
 * @returns {PropertyMap} - [read](#propertymap)
 *
 * @example
 * const subject = {
 *     a: {
 *         b: {
 *            d: true,
 *            e:  {
 *                g: 'foo'
 *            }
 *         },
 *         f: undefined,
 *     }
 * };
 * const result = Mapper(subject);
 * // result:
 * // { 'a.b.d': true, 'a.b.e.g': 'foo', 'a.f': undefined }
 */
export default function Mapper(subject, prefix = '') {
    const err = Errors.notype;
    if (!Is.object(subject))
        throw Thrower(`${err.message}, got '${typeof subject}'`, err.name);
    return Object
        .keys(subject)
        .reduce((result, key) => {
            const val = subject[key];
            return Is.object(val) && !Is.objectEmpty(val) ?
                Object.assign(result, Mapper(val, `${prefix + key}.`)) :
                { ...result, [prefix + key]: val };
        }, {});
}
