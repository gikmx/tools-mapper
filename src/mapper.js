import { Is } from '@gik/tools-checker';
import Thrower from '@gik/tools-thrower';
import Types from './types';

/**
 * @module mapper
 * @description Generates a flattened object containing a map for all the properties
 * available on `subject`.
 *
 * @param {Object} subject - The object you want to map.
 * @returns {mapperResult} - A flattened object.
 * @throws {mapperTypeError}
 *
 * @example @lang js
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
    const err = Types.ParamError;
    if (!Is.object(subject))
        Thrower([err.message, 'subject', 'Object', typeof subject], err.name);
    return Object
        .keys(subject)
        .reduce((result, key) => {
            const val = subject[key];
            return Is.object(val) && !Is.objectEmpty(val) ?
                Object.assign(result, Mapper(val, `${prefix + key}.`)) :
                { ...result, [prefix + key]: val };
        }, {});
}
