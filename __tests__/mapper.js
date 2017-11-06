/* globals test,expect */
import { Replacer } from '@gik/tools-thrower';
import Mapper from '../lib/mapper';
import Types from '../lib/types';

test('should throw an error when sent a non object', () => {
    expect.assertions(2);
    try {
        Mapper('foo');
    } catch (err) {
        expect(err.name).toBe(Types.ParamError.name);
        const message = Replacer(Types.ParamError.message, ['subject', 'Object', 'string']);
        expect(err.message).toBe(message);
    }
});

test('should resolve the example correctly', () => {
    const subject = { a: { b: { d: true, e: { g: 'foo' } }, f: undefined } };
    expect(() => Mapper(subject)).not.toThrow();
    expect(Mapper(subject)).toEqual({ 'a.b.d': true, 'a.b.e.g': 'foo', 'a.f': undefined });
});
