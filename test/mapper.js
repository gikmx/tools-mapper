import Test from 'ava';
import Mapper from '../lib/mapper';
import Types from '../lib/types';

Test('should throw an error when sent a non object', test =>
    test.throws(() => Mapper('foo'), err =>
        err.name === Types.mapperTypeError.name &&
        err.message.indexOf(Types.mapperTypeError.message) === 0,
    ),
);

Test('should resolve the example correctly', (test) => {
    const subject = { a: { b: { d: true, e: { g: 'foo' } }, f: undefined } };
    test.notThrows(() => Mapper(subject));
    test.deepEqual(Mapper(subject), { 'a.b.d': true, 'a.b.e.g': 'foo', 'a.f': undefined });
});
